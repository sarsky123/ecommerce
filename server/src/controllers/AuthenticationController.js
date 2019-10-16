const {User, Profile} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 *7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const createProf = user.createProfile()
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use. Please try it again.'
            })
        } 
    },
    async login(req, res) {
        try {
            const { Email, Password } = req.body
            const user = await User.findOne({
                where: {
                    Email: Email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect, please check your email information'
                })
            }
            

            const isPasswordValid = await user.comparePassword(Password, user.Password)

            
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect, please check your password information'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in'
            })
        }
    },
    async update(req, res) {
        try {
            const user = req.user.id
            const userFound = await User.findOne({
                where: {
                    id:user
                },
                include: [
                    { model: Profile }
                ]
            })
            
            if (userFound) {
                const result = await userFound.update(req.body)
                res.send(result)
                res.redirect('/profile')
            } else {
                throw Error()
            }

        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to create the profile object'
            })
        }
    }
}

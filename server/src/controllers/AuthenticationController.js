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
            console.log(createProf + 'createProf is here !!!!!!!!!!!!!!');
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
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send({
                    error: 'The login information was incorrect, please check your email information'
                })
            }
            

            const isPasswordValid = await user.comparePassword(password, user.password)

            
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
            console.log(req.user.id + 'req.user.id req.user.id req.user.id');
            
            const user = req.user.id
            const userFound = await User.findOne({
                where: {
                    id:user
                },
                include:{
                    model:Profile
                }
            })
            console.log(userFound + 'userFound userFound userFound');
            
            if (userFound) {
                console.log(req.body);
                
                const result = userFound.update(req.body, {
                    where: { 
                        id: user 
                    }
                })

                res.send(result)
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

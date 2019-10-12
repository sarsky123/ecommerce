const {
    Profile,
    User
} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const user = req.user.id
            const profile = await Profile.findOne({
                where: {
                    UserId: user
                },
                include:{
                    model: User
                }
            })
            res.send(profile)
        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: 'an error has occured trying to fetch the Profile'
            })
        }
    },


    async post(req, res) {
        try {
            const user = req.user.id
            const profile = await Profile.findOne({
                where: {
                    UserId: user
                }
            })
            if (profile) {
                const result = profile.update(req.body,{
                    where: { UserId: user }
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
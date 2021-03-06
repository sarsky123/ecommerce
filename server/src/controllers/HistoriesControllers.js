const {
    Histories
} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const user = req.user.id
            const history = await Histories.findAll({
                where: {
                    historyUser: user
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.send(_.uniqBy(history, his => his.historyProduct))
        } catch (err) {
            console.log(err);

            res.status(500).send({
                error: 'an error has occured trying to fetch the Histories'
            })
        }
    },


    async post(req, res) {
        try {
            const user = req.user.id
            const { historyProduct } = req.body
            console.log(historyProduct);
            console.log('historyProduct IS RIGHT HERE');


            const history = await Histories.create({
                historyUser: user,
                historyProduct: historyProduct
            })
            res.send(history)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to create the history object'
            })
        }
    }
}
const { 
    Checkout
} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const user = req.user.id
            const checkout = await Checkout.findAll({
                where:  {
                    UserIdentity: user
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.send(checkout)
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
            const { Information, ShippingInfo, Billing } = req.body
            
            const checkout = await Checkout.create({
                UserIdentity: user,
                FirstName: Information.Name.FirstName,
                LastName: Information.Name.LastName,
                Email: Information.Email,
                Phone: Information.Phone.Phone,
                CellPhone: Information.Phone.CellPhone,
                Address: ShippingInfo.Address,
                City: ShippingInfo.City,
                Country: ShippingInfo.Country,
                PostCode: ShippingInfo.PostCode,
                NameOnCard: Billing.NameOnCard,
                CreditCardNumber: Billing.CreditCardNumber,
                ExpiredDate: Billing.ExpiredDate,
                CVC: Billing.CVC,
            })
            res.send(checkout)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to create the history object'
            })
        }
    }
}

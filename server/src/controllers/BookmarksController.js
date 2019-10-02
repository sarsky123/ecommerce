const {
    Bookmark
} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const userId = req.user.id
            const {id} = req.query
            const where = {
                UserID: userId
            }
            if (id) {
                where.ProductID = id
            }
            const bookmarks = await Bookmark.findAll({
                where: where
            })
            res.send(bookmarks)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to fetch the bookmark'
            })
        }
    },
    
    async post(req, res) {
        try {
            const userID = req.user.id
            const { id } = req.body
            var Product = {
                Category: req.body.category,
                Gender: req.body.gender,
                ProductID: req.body.id,
                Image: req.body.image,
                Name: req.body.name,
                Onsale: req.body.onsale,
                Price: req.body.price,
                Title: req.body.title
            }
            Product.UserID = userID
            const bookmark = await Bookmark.findOne({
                where: {
                    UserID: userID,
                    ProductID: id
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }
            console.log(req.body);
            const newBookmark = await Bookmark.create(Product)
            res.send(newBookmark)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'an error has occured trying to create the bookmark'
            })
        }
    },
    async remove(req, res) {
        try {
            const userId = req.user.id
            const { bookmarkId } = req.params
            const bookmark = await Bookmark.findOne({
                where: {
                    ProductID: bookmarkId,
                    UserID: userId
                }
            })
            if (!bookmark) {
                return res.status(403).send({
                    error: 'you do not have access to this bookmark'
                })
            }
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to delete the bookmark'
            })
        }
    }
}
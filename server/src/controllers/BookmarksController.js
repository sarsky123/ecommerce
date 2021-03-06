const {
    Bookmark
} = require('../models')
const _ = require('lodash')

module.exports = {
    async index(req, res) {
        try {
            const userId = req.user.id
            const { ProductID } = req.query
            const where = {
                UserID: userId
            }
            if (ProductID) {
                where.ProductID = ProductID
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
            const {ProductID} = req.body
            const bookmark = await Bookmark.findOne({
                where: {
                    UserID: userID,
                    ProductID: ProductID
                }
            })
            if (bookmark) {
                return res.status(400).send({
                    error: 'you already have this set as a bookmark'
                })
            }
            
            const newBookmark = await Bookmark.create({
                UserID: userID,
                ProductID: ProductID
            })
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
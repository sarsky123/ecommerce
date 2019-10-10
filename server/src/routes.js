const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const isAuthenticated = require('./policies/isAuthenticated')
const BookmarksController = require('./controllers/BookmarksController.js')
const HistoriesController = require('./controllers/HistoriesControllers.js')
const CheckoutControllers = require('./controllers/CheckoutControllers.js')
const ProfileController = require('./controllers/ProfileController.js')


module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)
    app.post('/userUpdate',
        isAuthenticated,
        AuthenticationController.update)

    app.get('/bookmarks',
        isAuthenticated,
        BookmarksController.index)
    app.post('/bookmarks',
        isAuthenticated,
        BookmarksController.post)
    app.delete('/bookmarks/:bookmarkId',
        isAuthenticated,
        BookmarksController.remove)


    app.get('/histories',
        isAuthenticated,
        HistoriesController.index)
    app.post('/histories',
        isAuthenticated,
        HistoriesController.post)

    app.get('/checkout',
        isAuthenticated,
        CheckoutControllers.index)
    app.post('/checkout',
        isAuthenticated,
        CheckoutControllers.post)

    app.get('/profile',
        isAuthenticated,
        ProfileController.index)
    app.post('/profile',
        isAuthenticated,
        ProfileController.post)

}
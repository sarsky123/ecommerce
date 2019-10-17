const path = require('path')

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'ecommerce',
        user: process.env.DB_USER || 'ecommerce',
        password: process.env.DB_PASS || 'ecommerce',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../ecommerce.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}
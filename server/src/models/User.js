const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('Password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.Password, salt, null))
        .then(hash => {
            user.setDataValue('Password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        Email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail:{
                    msg: "Must be a valid email"
                }
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        hooks: {
            beforeCreate: hashPassword
        }
    })

    User.prototype.comparePassword = function (pw, userPassword) {
        return bcrypt.compareAsync(pw, userPassword)
    }

    User.associate = function (models) {
        User.hasOne(models.Profile)
    }

    return User
}
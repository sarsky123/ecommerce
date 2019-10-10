const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
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

    User.prototype.comparePassword = function (pw, userpassword) {
        return bcrypt.compareAsync(pw, userpassword)
    }

    User.associate = function (models) {
        User.hasOne(models.Profile)
    }

    return User
}
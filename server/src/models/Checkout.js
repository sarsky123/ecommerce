module.exports = (sequelize, DataTypes) => {
    const Checkout = sequelize.define('Checkout', {
        UserIdentity: DataTypes.STRING,
            FirstName: {
                type:DataTypes.STRING,
                validate:{
                    is: ["^[a-z]+$", 'i'],  
                }
            }, 
            LastName: {
        type: DataTypes.STRING,
        validate: {
            is: ["^[a-z]+$", 'i'],
        }
    }, 
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: "Must be a valid email"
                }
            }
        },
            Phone: DataTypes.STRING,
            CellPhone: DataTypes.STRING,
            Address: DataTypes.STRING,
            City: DataTypes.STRING,
            Country: DataTypes.STRING,
            PostCode: DataTypes.STRING,
            NameOnCard: {
        type: DataTypes.STRING,
        validate: {
            is: ["^[a-z]+$", 'i'],
        }
    }, 
            CreditCardNumber: {
                type:DataTypes.STRING,
                validate: {
                    isCreditCard:{
                        msg: "Must be a credit card"
                    }
                }
            },
        ExpiredDate: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: {
                    msg: "Must be in a date format"
                },  
            }
        },
            CVC: DataTypes.STRING
       
    })

    Checkout.associate = function (models) {
    }

    return Checkout
}

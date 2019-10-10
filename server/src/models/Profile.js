module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
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
      type: DataTypes.STRING,
      validate: {
        isCreditCard: {
          msg: "Must be a credit card"
        }
      }
    },
    ExpiredDate: {
      type: DataTypes.STRING,
      validate: {
        isDate: {
          msg: "Must be in a date format"
        },
      }
    },
    CVC: DataTypes.STRING
  })

  Profile.associate = function (models) {
    Profile.belongsTo(models.User)
  }

  return Profile
}

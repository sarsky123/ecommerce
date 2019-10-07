module.exports = (sequelize, DataTypes) => {
    const Checkout = sequelize.define('Checkout', {
        UserIdentity: DataTypes.STRING,
            FirstName: DataTypes.STRING, 
            LastName: DataTypes.STRING, 
            Email: DataTypes.STRING,
            Phone: DataTypes.STRING,
            CellPhone: DataTypes.STRING,
             Address: DataTypes.STRING,
            City: DataTypes.STRING,
            Country: DataTypes.STRING,
            PostCode: DataTypes.STRING,
            NameOnCard: DataTypes.STRING,
            CreditCardNumber: DataTypes.STRING,
            ExpiredDate: DataTypes.STRING,
            CVC: DataTypes.STRING,
    })

    Checkout.associate = function (models) {
    }

    return Checkout
}

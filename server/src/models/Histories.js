module.exports = (sequelize, DataTypes) => {
    const Histories = sequelize.define('Histories', {
        historyUser: DataTypes.STRING,
        historyProduct:  DataTypes.STRING
    })

    Histories.associate = function (models) {
    }

    return Histories
}

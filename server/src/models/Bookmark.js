module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
        UserID: DataTypes.STRING,
        ProductID: DataTypes.STRING
    })

    Bookmark.associate = function (models) {
    }

    return Bookmark
}
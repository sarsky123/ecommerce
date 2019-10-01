module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
        UserID: DataTypes.STRING,
        Category: DataTypes.STRING,
        Gender: DataTypes.STRING,
        ProductID: DataTypes.STRING,
        Image: DataTypes.STRING,
        Name: DataTypes.STRING,
        Onsale: DataTypes.BOOLEAN,
        Price: DataTypes.STRING,
        Title: DataTypes.TEXT
    
    })

    Bookmark.associate = function (models) {
    }

    return Bookmark
}
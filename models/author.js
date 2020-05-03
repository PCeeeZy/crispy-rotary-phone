module.exports = function(sequelize, DataTypes) {
    //schema
    var Author = sequelize.define("Author", {
        name: DataTypes.STRING
        // id: primary key
    });

    Author.associate = function (models) {
        Author.hasMany(models.Book, {
            onDelete: "cascade"
        });
    };  // Books.authorId  === Author.id

    return Author;
}
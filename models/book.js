module.exports = function(sequelize, DataTypes) {
    //schema
    var Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 128] // string length min and max
            }
        }  
        //id primary key
             
    });

    Book.associate = function (models) {
        Book.belongsTo(models.Author, {
            foriegnKey: {
                allowNull: false
            }
        })
        //authorId foriegnkey
    }; 

    return Book;
}
var express = require('express');
var exphbs = require("express-handlebars");
const bookController = require('./controller/bookController');

const db = require('./models');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.post("/api/author", function(req, res) {
    //we have access to a req.body!!!
    db.Author.create({
        name: req.body.name
    }).then(data => {
        // res.send("success");
        // res.status(200).end();
        res.json(data);
    }).catch(err => {
        res.send("oh no theres been an error")
    });

});
/*
{
    "name": "Arnold",
    "title": "terminator"
}

*/

app.post("/api/book", function(req, res) {
bookController.addBook(req, res);
    //we have access to a req.body!!!

});


app.get("*", function(req, res) {
    res.send("oops didnt mean to land here")
})

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
    });
})
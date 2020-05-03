module.exports = {
    addBook: function(req, res) {
        db.Authors.findOne({
            where: {
                name: req.body.name
            }
        }).then(({id}) => {
            db.Book.create({
                title: req.body.title,
                AuthorId: id
            }).then(data => {
                // res.send("success");
                // res.status(200).end();
                res.json(data);
            }).catch(err => {
                res.send("oh no theres been an error")
            });
        })
    }
}
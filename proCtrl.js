var app = require('./server');
//Create, GetOne, GetAll, Update, Delete

  module.exports = {

    create: function(req, res, next){
      var db = app.get('db');

      db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], function(err, product){
           res.send(product)
      })
    },

    getAll: function(req, res, next){
      var db = app.get('db');

      db.read_products(function(err, products){
        res.send(products)
      })
    },

    getOne: function(req, res, next){
      var db = app.get('db');

       db.read_product([req.query.id], function(err, products){
        res.send(products)
      })
    },

    update: function(req, res, next){
       var db = app.get('db');

       db.update_product([req.query.id, req.body.description], function(err, product){
         db.read_product([req.query.id], function(err, products){
          res.send(products)
        })
       })
    },


    delete: function(req, res, next){
      var db = app.get('db');

      db.delete_product([req.query.id], function(err, product){
        res.send(product);
      })
    }
}

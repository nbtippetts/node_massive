  var express = require('express');
  var bodyParser = require('body-parser');
  var cors = require('cors');
  var massive = require('massive');
  var connectionString = "postgres://postgres:otb4life@localhost/massData";


  var app = module.exports = express();
  var massiveServer = massive.connectSync({connectionString: connectionString});

  app.use(bodyParser.json());
  app.use(cors());
  app.set('db', massiveServer);

  var db = app.get('db');

  var proCtrl = require('./proCtrl');

  app.get('/products/product:id', proCtrl.getOne);

  app.get('/products', proCtrl.getAll);

  app.post('/product', proCtrl.create);

  app.put('/products/product:id/:desc', proCtrl.update);

  app.delete('/product/product:id', proCtrl.delete);

  var port = 5000
  app.listen(port, function(){
    console.log("Successfully listening", port)
  })

  var express = require('express');
  var bodyParser = require('body-parser');
  var session = require('express-session');
  var cors = require('cors');
  var massive = require('massive');
  var connectionString = "postgres://postgres:otb4life@localhost/massData";
  var config = require('./config');


  var app = module.exports = express();
  var massiveServer = massive.connectSync({connectionString: connectionString});

  var corsOptions = {
    origin: 'http://localhost:5000'
  };


  app.use(bodyParser.json());

  app.use(cors('corsOptions'));

  app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
  }));


  app.set('db', massiveServer);

  app.use(express.static('public'));
  console.log('this is dirname', __dirname)

  var db = app.get('db');

  var proCtrl = require('./proCtrl');

  app.get('/api/products/product:id', proCtrl.getOne);

  app.get('/api/products', proCtrl.getAll);

  app.post('/api/product', proCtrl.create);

  app.put('/api/products/productID', proCtrl.update);

  app.delete('/api/product:id', proCtrl.delete);

  var port = 5000;
  app.listen(port, function(){
    console.log("Successfully listening", port)
  })

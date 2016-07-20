// Dependências
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDb
mongoose.connect('mongodb://localhost/rest-api');

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas:
app.use('/api', require('./routes/api'));

// Inicialização do servidor:
app.listen(3000);
console.log('Servidor iniciado na porta: 3000');
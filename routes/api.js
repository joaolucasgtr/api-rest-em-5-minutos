// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Produto = require('../models/produto');

// Rotas
Produto.methods(['get', 'post', 'put', 'delete']);
Produto.register(router, '/produtos');

// Módulo roteador
module.exports = router;
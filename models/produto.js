// Dependências
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var produtoSchema = new mongoose.Schema({
  nome: String,
  sku: String,
  preco: Number
});

// Modelo
module.exports = restful.model('Produtos', produtoSchema);
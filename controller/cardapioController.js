const Cardapio = require('../models/Cardapio.js');

const cardapioController = {
  listarPizzas: (req, res) => {
    const listaPizzas = Cardapio.listarPizzas();
    return res.render('cardapio', { listaPizzas });
  },

  apagarPizza: (req, res) => {
    Cardapio.apagarPizzaDB(req.params);
    const listaPizzas = Cardapio.listarPizzas();
    return res.render('cardapio', { listaPizzas });
  },
  cadastrarViewForm: (req, res) => {
    return res.render('cadastroViewForm');
  },
  cadastrarModel: (req, res) => {
    console.log(req);
  },
};

module.exports = cardapioController;

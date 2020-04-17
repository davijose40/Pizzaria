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
};

module.exports = cardapioController;

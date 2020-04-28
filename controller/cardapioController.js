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
    const { nomePizza, precoPizza } = req.body;
    const [imgPizza] = req.files;
    const img = imgPizza.filename;
    const resp = Cardapio.cadastrarPizza(nomePizza, precoPizza, img);
    const msg = resp ? 'Pizza dastrada com sucesso!' : null;
    return res.render('cadastroViewForm', { msg });
  },
};

module.exports = cardapioController;

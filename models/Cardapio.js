const fs = require('fs');

const path = require('path');

const cardapioJson = path.join('cardapio.json');

const Cardapio = {
  listarPizzas: () => {
    const listaPizzas = JSON.parse(
      fs.readFileSync(cardapioJson, { encoding: 'utf-8' })
    );
    return listaPizzas;
  },

  apagarPizzaDB: (i) => {
    const listaPizzas = JSON.parse(
      fs.readFileSync(cardapioJson, { encoding: 'utf-8' })
    );
    listaPizzas.splice(i, 1);
    return fs.writeFileSync(cardapioJson, JSON.stringify(listaPizzas));
  },
};

module.exports = Cardapio;

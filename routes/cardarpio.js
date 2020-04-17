const express = require('express');
const cardapioController = require('../controller/cardapioController.js');

const router = express.Router();

/* Get cardapioController */
router.get('/ver', cardapioController.listarPizzas);

/* Delete */
router.delete('/apagar/:index', cardapioController.apagarPizza);

/* Cadastrar */
router.get('/cadastrar')

module.exports = router;

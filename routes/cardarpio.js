const express = require('express');
const cardapioController = require('../controller/cardapioController.js');
const upload = require('../app');

const router = express.Router();

/* Get cardapioController */
router.get('/ver', cardapioController.listarPizzas);

/* Delete */
router.delete('/apagar/:index', cardapioController.apagarPizza);

/* Cadastrar */
router.get('/cadastrar', cardapioController.cadastrarViewForm);
router.post('/cadastar', upload(), cardapioController.cadastrarModel);

module.exports = router;

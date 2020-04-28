const express = require('express');
const multer = require('multer');
const path = require('path');
const cardapioController = require('../controller/cardapioController.js');

const router = express.Router();

// multer config, change place!
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('public', 'images'));
  },
  filename: (req, file, cb) => {
    const nomeImg = `${Date.now()}-${req.body.nomePizza.replace(
      /\s/g,
      ''
    )}${path.extname(file.originalname)}`;
    // 546841651468 - Frango.jpg
    cb(null, nomeImg);
  },
});

const upload = multer({ storage });

/* Get cardapioController */
router.get('/ver', cardapioController.listarPizzas);

/* Delete */
router.delete('/apagar/:index', cardapioController.apagarPizza);

/* Cadastrar */
router.get('/cadastrar', cardapioController.cadastrarViewForm);
router.post('/cadastrar', upload.any(), cardapioController.cadastrarModel);

module.exports = router;

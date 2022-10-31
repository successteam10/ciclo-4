'use strict'

var express = require('express');
const { model } = require ('mongoose');
var Article = require('../controller/article');

// Llamamos al objeto router express
var router = express.Router();

router.post('/save', Article.save);
router.get('articles', Article.getArtecles);
router.delete('/delete/:id', Article.delete);

module.exports = router; 
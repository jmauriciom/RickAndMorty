const express = require('express');
const router = express.Router();

const { login } = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const { getCharById } = require('../controllers/characters');


router.get('/character/:id', (req, res) => {
    getCharById(req, res);
})

router.get('/login', (req,res) => {
    login(req, res);
})

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res);
})

module.exports= router;
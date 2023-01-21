const express = require('express');
const animeSchema = require('../models/anime')


const router = express.Router();

router.get('/anime', (req, res) => {


    animeSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})

//crear anime
router.post('/anime', (req, res) => {


    const anime = animeSchema(req.body)
    anime.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})


module.exports = router;
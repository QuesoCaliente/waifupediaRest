const express = require('express');
const pielSchema = require('../models/piel')


const router = express.Router();


//crear piel
router.post('/piel', (req, res) => {

    
    const piel =  pielSchema(req.body)
    piel.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
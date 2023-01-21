const express = require('express');
const colorSchema = require('../models/color')


const router = express.Router();


//crear color
router.post('/color', (req, res) => {

    
    const color =  colorSchema(req.body)
    color.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
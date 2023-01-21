const express = require('express');
const pechosSchema = require('../models/pechos')


const router = express.Router();


//crear pechos
router.post('/pechos', (req, res) => {

    
    const pechos =  pechosSchema(req.body)
    pechos.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
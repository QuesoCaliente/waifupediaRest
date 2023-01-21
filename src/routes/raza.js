const express = require('express');
const razaSchema = require('../models/raza')


const router = express.Router();


//crear raza
router.post('/raza', (req, res) => {

    
    const raza =  razaSchema(req.body)
    raza.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
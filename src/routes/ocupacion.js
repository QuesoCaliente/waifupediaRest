const express = require('express');
const ocupacionSchema = require('../models/ocupacion')


const router = express.Router();


//crear ocupacion
router.post('/ocupacion', (req, res) => {

    
    const ocupacion =  ocupacionSchema(req.body)
    ocupacion.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
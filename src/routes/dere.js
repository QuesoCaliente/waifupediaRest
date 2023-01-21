const express = require('express');
const dereSchema = require('../models/dere')


const router = express.Router();


//crear anime
router.post('/dere', (req, res) => {

    
    const dere =  dereSchema(req.body)
    dere.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
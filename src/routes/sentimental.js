const express = require('express');
const sentimentalSchema = require('../models/sentimental')


const router = express.Router();


//crear raza
router.post('/sentimental', (req, res) => {

    
    const sentimental =  sentimentalSchema(req.body)
    sentimental.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
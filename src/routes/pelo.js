const express = require('express');
const peloSchema = require('../models/pelo')


const router = express.Router();


//crear pelo
router.post('/pelo', (req, res) => {

    
    const pelo =  peloSchema(req.body)
    pelo.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})


module.exports = router;
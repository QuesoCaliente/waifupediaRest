const express = require('express');
const ubicacionSchema = require('../models/ubicacion')


const router = express.Router();


//crear ubicacion
router.post('/ubicacion', (req, res) => {

    
    const ubicacion =  ubicacionSchema(req.body)
    ubicacion.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})

// obtener todos
router.get('/ubicacion', (req, res) => {

    
    ubicacionSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})

// obtener
router.get('/ubicacion/:id', (req, res) => {
    const { id } = req.params;
    
    ubicacionSchema.findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})

// actualizar
router.put('/ubicacion/:id', (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body

    ubicacionSchema.updateOne({_id: id}, { $set: { nombre } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ error }))
})

module.exports = router;
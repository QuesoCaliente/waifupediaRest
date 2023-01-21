const express = require('express');
const rolesSchema = require('../models/roles')


const router = express.Router();

router.get('/roles', (req, res) => {


    rolesSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})

//crear rol
router.post('/roles', (req, res) => {


    const roles = rolesSchema(req.body)
    roles.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})


module.exports = router;
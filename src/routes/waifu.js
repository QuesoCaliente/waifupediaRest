const express = require('express');
const waifuSchema = require('../models/waifu')
const mongoose = require('mongoose');


const router = express.Router();


//crear waifu
router.post('/waifu', async (req, res) => {


    const waifu = waifuSchema(req.body)
    await waifu.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})


// obtener todos
router.get('/waifu', async (req, res) => {

    const limite = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1

    const myCustomLabels = {
        totalDocs: 'itemCount',
        docs: 'data',
        limit: 'limit',
        page: 'page',
        nextPage: 'nextPage',
        prevPage: 'prevPage',
        totalPages: 'totalPages',
        pagingCounter: 'pagingCounter',
        meta: 'paginator',
    };

    const options = {
        populate: ['anime', 'raza', 'lugarOrigen', 'situacionSentimental', 'colorOjos', 'colorPelo', 'colorPiel', 'pechos', 'largoPelo', 'ocupacion', 'tipoDere'],
        customLabels: myCustomLabels,
        limit: limite,
        sort: { 'created_at': -1 }
    }

    await waifuSchema.paginate({}, options)
        .then((data) => res.json(data))
        .catch((error) => res.json({ error }))
})

// obtener
router.get('/waifu/:search', async (req, res) => {
    const { search } = req.params;
    let waifu = null;
    if (mongoose.isValidObjectId(search)) {

        waifu = await waifuSchema.findById(search).populate(['anime', 'raza', 'lugarOrigen', 'situacionSentimental', 'colorOjos', 'colorPelo', 'colorPiel', 'pechos', 'largoPelo', 'ocupacion', 'tipoDere'])
    } else {
        waifu = await waifuSchema.find({
            nombre: {
                $regex: '.*' + search + '.*',
                $options: 'i'
            }
        }).populate(['anime', 'raza', 'lugarOrigen', 'situacionSentimental', 'colorOjos', 'colorPelo', 'colorPiel', 'pechos', 'largoPelo', 'ocupacion', 'tipoDere'])
    }

    if (!waifu) {
        return res.status(404).json({ message: 'Waifu no encontrada' })
    }
    if (waifu.length == 0) {
        return res.status(404).json({ message: 'Waifu no encontrada' })
    }

    res.json(waifu)
})


module.exports = router;
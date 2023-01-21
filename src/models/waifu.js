const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');

const waifuSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        alias: {
            type: String,
            required: false
        },
        anime: {
            type: mongoose.Schema.ObjectId,
            ref: "Anime"
        },
        imagenes: [String],
        cumpleaños: {
            type: Date,
            required: false
        },
        raza: {
            type: mongoose.Schema.ObjectId,
            ref: "Raza"
        },
        debutAnime: {
            type: Number,
            required: false
        },
        debutManga: {
            type: Number,
            required: false
        },
        lugarOrigen: {
            type: mongoose.Schema.ObjectId,
            ref: "Ubicacion"
        },
        edad: {
            type: Number,
            required: false
        },
        situacionSentimental: {
            type: mongoose.Schema.ObjectId,
            ref: "Sentimental"
        },
        colorOjos: {
            type: mongoose.Schema.ObjectId,
            ref: "Color"
        },
        colorPelo: {
            type: mongoose.Schema.ObjectId,
            ref: "Color"
        },
        colorPiel: {
            type: mongoose.Schema.ObjectId,
            ref: "Piel"
        },
        pechos: {
            type: mongoose.Schema.ObjectId,
            ref:"Pechos"
        },
        largoPelo: {
            type: mongoose.Schema.ObjectId,
            ref: "Pelo"
        },
        lentes: {
            type: Boolean,
            required: false
        },
        ocupacion: {
            type: mongoose.Schema.ObjectId,
            ref:"Ocupacion"
        },
        tipoDere: {
            type: mongoose.Schema.ObjectId,
            ref: "Dere"
        },
        habilidades: {
            type: String,
            required: false
        },
        descripcion:{
            type: String,
            required: false
        },
        estado:{
            type: Boolean,
            required: true
        }

    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'},
        versionKey: false
    },
)

waifuSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Waifu', waifuSchema)
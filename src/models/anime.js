const mongoose = require('mongoose')

const animeSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        }
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at'}
    },
    { versionKey: '_somethingElse' }
)


module.exports = mongoose.model('Anime', animeSchema)
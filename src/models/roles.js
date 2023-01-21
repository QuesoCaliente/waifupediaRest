const mongoose = require('mongoose');


const rolesSchema = mongoose.Schema({
    nombre: String,
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Rol', rolesSchema)
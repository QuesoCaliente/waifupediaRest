const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Rol",
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('User', userSchema)
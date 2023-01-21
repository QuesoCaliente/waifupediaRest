const mongoose = require('mongoose');

require('dotenv').config();

// conexion MongoDB
console.log(process.env.MONGODB_URI)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Conectado a MongoDB Atlas')
}).catch((error) => { console.error(error) })
const express = require('express');
const morgan = require('morgan')
const database = require('./database')
const jwt = require('jsonwebtoken')

const ubicacionRoutes = require('./routes/ubicacion')
const animeRoutes = require('./routes/anime')
const colorRoutes = require('./routes/color')
const dereRoutes = require('./routes/dere')
const ocupacionRoutes = require('./routes/ocupacion')
const pechosRoutes = require('./routes/pechos')
const peloRoutes = require('./routes/pelo')
const pielRoutes = require('./routes/piel')
const razaRoutes = require('./routes/raza')
const sentimentalRoutes = require('./routes/sentimental')
const waifuRoutes = require('./routes/waifu')
const rolesRoutes = require('./routes/roles')
const authRoutes = require('./routes/auth.routes')

const cors = require('cors')


const app = express();



//Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api/v1/', authRoutes)
app.use('/api/v1/', waifuRoutes)
app.use('/api/v1/', ensureToken, verifyToken, ubicacionRoutes)
app.use('/api/v1/', animeRoutes)
app.use('/api/v1/', colorRoutes)
app.use('/api/v1/', dereRoutes)
app.use('/api/v1/', ocupacionRoutes)
app.use('/api/v1/', pechosRoutes)
app.use('/api/v1/', peloRoutes)
app.use('/api/v1/', pielRoutes)
app.use('/api/v1/', razaRoutes)
app.use('/api/v1/', sentimentalRoutes)
app.use('/api/v1/', rolesRoutes)

const port = process.env.PORT || 9000;
app.get("/", (req, res) => {
    res.send('Bienvenido')
})


function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

function verifyToken(req, res, next) {
    jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            req.user = data;
            next();
        }
    });

}


app.listen(port, () => console.log('escuchando en el puerto ' + port))
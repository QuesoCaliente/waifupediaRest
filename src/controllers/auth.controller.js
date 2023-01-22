const userSchema = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { serialize } = require('cookie')


const signUpController = async (req, res) => {
    try {
        const { username, email, roles, password } = req.body
        const user = userSchema.findOne({ email: email })

        if (user) res.status(409).json({
            error: 'ha ocurrido un error, por favor consulte a un administrador',
            message: 'un ditto se ha colado en el servidor'
        })
        const passwordHash = await bcrypt.hash(password, 10)
        const createdUser = await userSchema.create({
            username,
            email,
            roles,
            password: passwordHash
        })

        return res.json(createdUser)

    } catch (error) {
        console.log('Error ', error)

    }
}

const signInController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userSchema.findOne({ email: email })
        if (!user) res.status(409).json({
            error: 'ha ocurrido un error, por favor consulte a un administrador',
            message: 'un ditto se ha colado en el servidor'
        })
        const passwordCompare = await bcrypt.compare(password, user.password)

        if (!passwordCompare) res.status(409).json({
            error: 'Contraseña invalida',
            message: 'un ditto se ha colado en el servidor'
        })
        const token = jwt.sign({ id: user._id, email: user.email, roles: user.roles }, process.env.SECRET_KEY, {
            expiresIn: 86400
        })
        return res.status(200).json({ token })

    } catch (error) {
        console.log('Error ', error)

    }

}



module.exports = { signUpController, signInController }
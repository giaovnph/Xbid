import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Auth } from "../model/auth.js"

export const Register = async (req, res) => {
    try {
        const { email, password } = req.body

        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(password, salt)

        const data = {
            email: email,
            password: hash
        }

        const user = await Auth.create(data)
        const token = await jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: "1d" })

        res.send(token)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await Auth.findOne({ email })
        const match = await bcrypt.compare(password, user.password)
        
        if (match) {
            const token = await jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: "1d" })
            res.send(token)
        }

    } catch (error) {
        res.status(500).json(error)
    }
}




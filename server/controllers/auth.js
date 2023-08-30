import User  from '../models/User.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    if(!user) return res.status(404).json({message: "User does not exists"})

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)

    res.json({ token, user })
}

export const register = async (req, res) => {
    const { email, password } = req.body

    const newUser = await User.create({email: email, password: password})

    res.json({message: "Register successful"})
}
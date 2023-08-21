import User  from '../models/User.js'

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    if(!user) return res.status(404).json({message: "User does not exists"})


    res.json({message: "Login successful"})
}

export const register = async (req, res) => {
    const { email, password } = req.body

    const newUser = await User.create({email: email, password: password})

    res.json({message: "Register successful"})
}
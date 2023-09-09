import User  from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email: email })
        if(!user) return res.status(404).json({message: "User does not exists"})

        const checkForPass = await bcrypt.compare(password, user.password)
        
        if(!checkForPass) return res.status(400).json({ message: "Invalid Credentials" })

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY)

        res.json({ token, user })

    } catch (error) {
        console.log(error)   
    }
}

export const register = async (req, res) => {

    try {

    const { email, password, firstName, lastName, username } = req.body
    
    const checkForUserEmail = await User.findOne({ email: email })
    const checkForUsername = await User.findOne({ username: username })

    if(checkForUsername) return res.status(400).json({ error: "Username already in use"})
    if(checkForUserEmail) return res.status(400).json({ error: "Account with that email already exists"})

    const salt = await bcrypt.genSalt()

    const hashedPass = await bcrypt.hash(password, salt)
    
    const newUser = await User.create({
        email: email,
        password: hashedPass,
        firstName: firstName,
        lastName: lastName,
        username: username
    })
    
    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET_KEY)

    res.status(200).json({ newUser, token })

    } catch (error) {
        console.log(error)
    }
}
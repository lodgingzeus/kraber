import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
dotenv.config()

export const verifyToken = (req, res, next) => {
    let authHeader = req.header("Authorization")

    if(authHeader) {
        const token = authHeader.split(' ')[1]
        
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = verified
        next()
    } else {
        res.json('You are not authorized to access this')
    }
}
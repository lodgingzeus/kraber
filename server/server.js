import express from 'express'
const app = express()
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/Authentication.js'
import postRoute from './routes/post.js'
import userRoute from './routes/users.js'
const PORT = 8181

dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: '30mb', extended: true}));


app.use('/auth', authRoute)
app.use('/post', postRoute)
app.use('/users', userRoute)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to Database')
})

app.listen(PORT, () => {
    console.log('Server is now live!')
})
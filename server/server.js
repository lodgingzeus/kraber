import express from 'express'
const app = express()
import cors from 'cors'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/Authentication.js'
const PORT = 8181

dotenv.config()
app.use(cors())
app.use(express.json())


app.use('/auth', authRoute)

mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to Database')
})

app.listen(PORT, () => {
    console.log('Server is now live!')
})
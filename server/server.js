const express = require('express')
const app = express()
const cors = require('cors')
const router = express.Router()
const authRoute = require('./routes/Authentication')
const PORT = 8181

app.use(cors())
app.use(express.json())
app.use('/auth', authRoute)


app.listen(PORT, () => {
    console.log('Server is now live!')
})
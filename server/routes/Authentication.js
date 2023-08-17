const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    // res.send('Hello this is auth route')
    res.json({"sex": "true"})
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    // res.send('Hello this is signin auth route')
    res.json({email: email, password: password})
})

module.exports = router
import express from 'express'
import { login, register } from '../controllers/auth.js'

const router = express.Router()

router.post('/signin', login)
router.post('/register', register)

export default router
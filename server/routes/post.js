import express from 'express'
import { createPost } from '../controllers/post.js'
import { verifyToken } from '../middleware/auth.js'
const router = express.Router()

router.post('/create', verifyToken, createPost)
export default router

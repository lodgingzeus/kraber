import express from 'express'
import { createPost, getFeedPosts } from '../controllers/post.js'
import { verifyToken } from '../middleware/auth.js'
const router = express.Router()

router.post('/create', verifyToken, createPost)
router.get('/', verifyToken, getFeedPosts)
export default router

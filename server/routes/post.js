import express from 'express'
import { createPost, getFeedPosts, getUserPosts } from '../controllers/post.js'
import { verifyToken } from '../middleware/auth.js'
const router = express.Router()

router.post('/create', verifyToken, createPost)
router.get('/feed/:id', verifyToken, getFeedPosts)
router.get('/:id', verifyToken, getUserPosts)
export default router

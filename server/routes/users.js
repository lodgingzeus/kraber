import express from 'express'
const router = express.Router()
import { verifyToken } from '../middleware/auth.js'
import { followUser, getFriendList, getUser } from '../controllers/users.js'

router.get('/:id', verifyToken, getUser)
router.get('/friends/:id', verifyToken, getFriendList)
router.put('/follow/:id', verifyToken, followUser)

export default router
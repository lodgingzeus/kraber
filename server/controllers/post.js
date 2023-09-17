import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
    try {
        const { description, image, userId, username } = req.body

        const newPost = await Post.create({
            description,
            image: image,
            userId: userId,
            username
        })
        
        res.status(200).json({message: "upload successful"})
    } catch (error) {
        console.log(error)
    }
}

export const getFeedPosts = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({username: id})
        const friendList = user.friends.map(friend => friend[0])
        const posts = await Promise.all(
            friendList.map(async (friend) => {
                const currUser = await User.findOne({username: friend})
                const currUserPosts = await Post.find({userId : currUser._id})
                return currUserPosts
            })
        )
        const sortedPosts = posts.flat()
        res.status(200).json(sortedPosts)
    } catch (error) {
        console.log(error)
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ username : id })
        const userPosts = await Post.find({ userId: user._id})
        res.json(userPosts)
    } catch (error) {
        console.log(error)
    }
}
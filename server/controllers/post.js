import Post from "../models/Post.js";

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
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
    }
}
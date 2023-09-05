import Post from "../models/Post.js";

export const createPost = async (req, res) => {
    try {
        const { description, image, userId } = req.body

        const newPost = await Post.create({
            description,
            image: image,
            userId: userId
        })
        
        res.status(200).json({message: "upload successful"})
    } catch (error) {
        console.log(error)
    }
}
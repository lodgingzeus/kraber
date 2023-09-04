import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        default: []
    },
    likes: {
        type: Number,
        default: 0
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post
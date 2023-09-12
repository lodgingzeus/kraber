import User from "../models/User.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        
        const user = await User.findOne({ username: id})
        res.json(user)
    } catch (error) {
        console.log(error)
    }
}

export const followUser = async (req, res) => {
    try {
        const { currentUserId } = req.body
        const { id } = req.params

        const user = await User.findOne({ username: id })
        const currentUser = await User.findOne({ _id: currentUserId })
        
        const followUser = await currentUser.updateOne({ $addToSet: { friends: [user.username]} })

        res.json({ friendList: currentUser.friends })
    } catch (error) {
        console.log(error)
    }
}

export const getFriendList = async (req, res) => {
    try {
        const { id } = req.params

        const user = await User.findOne({ _id: id })

        res.json({ list: user.friends })

    } catch (error) {
        console.log(error)
    }
}
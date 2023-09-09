import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    posts: []
}

export const userSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts.slice(0).reverse().map(element => element)
        }
    }
})

export const { setLogin, setLogout, setPosts } = userSlice.actions
export default userSlice.reducer
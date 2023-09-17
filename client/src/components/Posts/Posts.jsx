import { useEffect, useState } from 'react'
import { setPosts } from '../../store/slices/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post/Post'
import { useParams } from 'react-router-dom'

const Posts = ( { isProfile = false }) => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.username)
  const token = useSelector(state => state.token)
  const posts = useSelector(state => state.posts)

  const getPosts = async () => {
    const response = await fetch(`http://localhost:8181/post/feed/${currentUser}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`}
    })

    const data = await response.json()

    dispatch(setPosts({
      posts: data
    }))
  }

  
  const getProfilePosts = async () => {
    const response = await fetch(`http://localhost:8181/post/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()
    dispatch(setPosts({
      posts: data
    }))
  }

  useEffect(() => {
    if(isProfile) {
      getProfilePosts()
    }else{
      getPosts()
    }
  }, [])

  return (
    <div className={`${!isProfile ? 'w-5/12 mx-56' : 'grid grid-cols-3 gap-10'}`}>
        {posts.map((post, index) => (
          <div className={`${!isProfile ? 'm-10' : ''}`}  key={post._id}>
            <Post postData = {post} isProfile = {isProfile} index={index}/>
          </div>
        ))}
    </div>
  )
}

export default Posts
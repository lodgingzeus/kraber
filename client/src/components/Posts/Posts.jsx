import { useEffect } from 'react'
import { setPosts } from '../../store/slices/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post/Post'

const Posts = () => {

  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const posts = useSelector(state => state.posts)
  
  const getPosts = async () => {
    const response = await fetch('http://localhost:8181/post', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`}
    })

    const data = await response.json()

    dispatch(setPosts({
      posts: data
    }))
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className='w-5/12 mx-56'>
        <div className='m-10'>
        {posts.map(post => (
          <Post postData = {post} key={post._id}/>
        ))}
        </div>
    </div>
  )
}

export default Posts
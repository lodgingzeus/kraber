import React, { useEffect } from 'react'
import Friends from './Friends'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from '../../store/slices/user/userSlice'

const FriendsList = () => {

  const userId = useSelector(state => state.user._id)
  const token = useSelector(state => state.token)
  const friends = useSelector(state => state.user.friends)
  const dispatch = useDispatch()
  
  const getFriends = async () => {
    const response = await fetch(`http://localhost:8181/users/friends/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()
    dispatch(setFriends({
      friendList: data.list
    }))
  }

  useEffect(() => {
    getFriends()
  }, [])

  return (
    <div className='border-8 w-[512px] flex flex-col h-56 mx-[-64px]'>
        People you follow
        {friends.map((friend) => (
          <Friends key={friend} friend = {friend}/>
        ))}
    </div>
  )
}

export default FriendsList
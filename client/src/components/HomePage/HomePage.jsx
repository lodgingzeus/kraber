import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Posts from '../Posts/Posts'
import FriendsList from '../FriendsList/FriendsList'

const HomePage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Posts />
        <FriendsList />
    </div>
  )
}

export default HomePage
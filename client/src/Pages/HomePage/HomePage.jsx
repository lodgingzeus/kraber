import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import FriendsList from '../../components/FriendsList/FriendsList'

const HomePage = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <Posts isProfile={false}/>
        <FriendsList />
    </div>
  )
}

export default HomePage
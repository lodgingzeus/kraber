import React from 'react'
import Friends from './Friends'

const FriendsList = () => {
  return (
    <div className='border-8 w-[512px] flex flex-col h-56 mx-[-64px]'>
        People you follow
        <Friends />
        <Friends />
        <Friends />
        <Friends />
        <Friends />
    </div>
  )
}

export default FriendsList
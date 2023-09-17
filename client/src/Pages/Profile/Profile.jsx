import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ichigo from '../../assets/ichigo.jpg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Posts from '../../components/Posts/Posts'

const Profile = () => {

  const { id } = useParams()
  const token = useSelector(state => state.token)
  const currentUser = useSelector(state => state.user._id)

  const getUser = async () => {
    const response = await fetch(`http://localhost:8181/users/${id}`, {
      methond: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()
    // console.log(data)

  }

  const handleFollow = async () => {
    const response = await fetch(`http://localhost:8181/users/follow/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        currentUserId: currentUser
      })
    })

    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
        <div className='flex w-full flex-col items-center'>
         <div className='flex relative items-start w-3/6 p-2'>
         <div>
            Profile 
            <img src={ichigo} alt="ss" className='w-64 h-64 rounded-full'/>
          </div>
          <div className='flex'>
              <div className='border-2 h-10 p-1 text-xl m-2'>
                Username
              </div>
              <div className='border-2 h-10 btn p-1 btn-primary text-white m-2' onClick={handleFollow}>
                Follow
              </div>
              <div className='border-2 h-10 bg-slate-500 p-1 text-white m-2'>
                Message
              </div>
          </div>
         </div>
          <div className='flex'>
            Bio
          </div>
          <Posts isProfile={true}/>
        </div>
    </div>
  )
}

export default Profile
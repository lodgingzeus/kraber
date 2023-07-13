import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ichigo from '../../assets/ichigo.jpg'
import Posts from '../../components/Posts/Posts'

const Profile = () => {
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
              <div className='border-2 h-10 btn p-1 btn-primary text-white m-2'>
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
        <div className='grid grid-cols-3 gap-10'>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
            <div>
              <img src={ichigo} alt="ss" className='w-96 h-96'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
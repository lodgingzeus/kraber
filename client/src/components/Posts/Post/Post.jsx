import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { CgProfile} from 'react-icons/cg'
import { BiComment } from 'react-icons/bi'
import moment from 'moment'
import ichigo from '../../../assets/ichigo.jpg'
import ruka from '../../../assets/ruka.jpg'

const Post = ( { postData, isProfile, index } ) => {
    

  const openModal = (index) => {
    const modalId = `post_modal_${index}`
    const modal = document.getElementById(modalId)

    modal.showModal()
  }

  return (
    <>
      {!isProfile && (
        <div className='flex flex-wrap overflow-hidden flex-col h-auto m-10'>
        <div className='flex items-center w-full m-2 text-2xl'>
           <CgProfile />
           <div className='p-2'>
             {postData.username}
           </div>
           <div className='mt-1 text-base opacity-90'>
             {moment(postData.createdAt).fromNow()}
           </div>
        </div>
        <div className='flex w-full mx-2'>
            {postData.description}
        </div>
        <div className='h-[720px] w-full my-4 relative p-b-[100%]'>
                <img src={postData.image} alt="name" className='w-full h-full absolute object-cover object-center p-2' />
        </div>
        <div className='flex w-full m-2'>
            <div className='flex m-2'>
                <AiFillHeart className='text-4xl text-red-800' /> 
                <div className='text-2xl'>
                    {postData.likes}
                </div>
            </div>
            <div className='flex m-2'>
                <BiComment className='text-4xl' />
                <div className='text-2xl'>
                    0
                </div>
            </div>
        </div>
    </div>
      )}
      {isProfile && (
        <div className='gap-10 cursor-pointer' onClick={() => {openModal(index)}}>

          {/* Post */}

          <div>
              <img src={postData.image} alt="ss" className='w-96 h-96'/>
          </div>

          {/* Post Modal */}
          <dialog id={`post_modal_${index}`} className='modal'>
          <div className='modal-box'>
          <form method='dialog'>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" formMethod='dialog'>✕</button>
            <div className='mt-1 text-base opacity-90'>
             {moment(postData.createdAt).fromNow()}
           </div>
            <div className='flex w-full mx-2'>
              {postData.description}
            </div>
            <div className='h-[100%] w-auto my-4 relative p-b-[100%]'>
                    <img src={postData.image} alt="name" className='w-full h-full p-2' />
            </div>
            <div className='flex w-full m-2'>
                <div className='flex m-2'>
                    <AiFillHeart className='text-4xl text-red-800' /> 
                    <div className='text-2xl'>
                        {postData.likes}
                    </div>
                </div>
                <div className='flex m-2'>
                    <BiComment className='text-4xl' />
                    <div className='text-2xl'>
                        0
                    </div>
                </div>
            </div>
        </form>
          </div>
          </dialog>


        </div>
      )}
    </>
  )
}

export default Post
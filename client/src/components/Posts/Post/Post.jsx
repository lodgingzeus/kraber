import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import ichigo from '../../../assets/ichigo.jpg'
import ruka from '../../../assets/ruka.jpg'

const Post = () => {
  return (
    <div className='border-4 flex flex-wrap overflow-hidden flex-col h-auto m-2'>
        <div className='block w-full m-4'>
            User
        </div>
        <div className='flex w-full'>
            cyka blyat rush b no stop
        </div>
        <div className='h-[720px] w-full my-4 relative border-4 p-b-[100%]'>
                <img src={ruka} alt="name" className='w-full h-full absolute object-cover object-center' />
        </div>
        <div className='flex w-full m-2'>
            <div className='flex m-2'>
                <AiFillHeart className='text-4xl text-red-800' /> 
                <div className='text-2xl'>
                    0
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
  )
}

export default Post
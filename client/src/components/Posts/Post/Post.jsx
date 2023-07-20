import React from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { CgProfile} from 'react-icons/cg'
import { BiComment } from 'react-icons/bi'
import ichigo from '../../../assets/ichigo.jpg'
import ruka from '../../../assets/ruka.jpg'

const Post = () => {
  return (
    <div className='border-b-2 border-[#1fb2a6] flex flex-wrap overflow-hidden flex-col h-auto m-10'>
        <div className='flex items-center w-full m-2 text-2xl'>
           <CgProfile />
           <div className='p-2'>
             User
           </div>
        </div>
        <div className='flex w-full mx-2'>
            cyka blyat rush b no stop
        </div>
        <div className='h-[720px] w-full my-4 relative p-b-[100%]'>
                <img src={ichigo} alt="name" className='w-full h-full absolute object-cover object-center p-2' />
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
//     <div className="card lg:card-side bg-base-100 shadow-xl m-5">
//   <figure><img src={ruka} alt="Album" className=''/></figure>
//   <div className="card-body">
//     <h2 className="card-title">New album is released!</h2>
//     <p>Click the button to listen on Spotiwhy app.</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Listen</button>
//     </div>
//   </div>
// </div>
  )
}

export default Post
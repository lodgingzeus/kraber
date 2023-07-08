import { BsSearch, BsFillChatHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='h-screen w-64 flex items-center overflow-auto text-lg'>
        <div className='border-8 p-2 h-3/6 flex justify-center flex-col w-full text-2xl'>
        <div className='border-b-2 m-2 mb-16 flex items-center'>
        <AiFillHome /> Kraber
        </div>
            <div className='m-4 flex items-center gap-3'>
                <AiFillHome /> Home
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsSearch /> Search
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsFillChatHeartFill /> Messages
            </div>
            <div className='m-4 flex items-center gap-3'>
                <CgProfile /> Profile
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BiLogOut /> Logout
            </div>
        </div>
    </div>
  )
}

export default Sidebar
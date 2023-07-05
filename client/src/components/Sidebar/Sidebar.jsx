import { BsSearch, BsFillChatHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {
  return (
    <div className='h-screen w-40 flex items-center overflow-auto text-lg'>
        <div className='border-8 p-2 h-3/6 flex justify-center flex-col'>
        <div>
            Kraber
        </div>
            <div className='m-2 flex items-center gap-3'>
                <AiFillHome /> Home
            </div>
            <div className='m-2 flex items-center gap-3'>
                <BsSearch /> Search
            </div>
            <div className='m-2 flex items-center gap-3'>
                <BsFillChatHeartFill /> Messages
            </div>
            <div className='m-2 flex items-center gap-3'>
                <CgProfile /> Profile
            </div>
        </div>
    </div>
  )
}

export default Sidebar
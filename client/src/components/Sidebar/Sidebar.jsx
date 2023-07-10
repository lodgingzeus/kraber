import { BsSearch, BsFillChatHeartFill } from 'react-icons/bs'
import { AiFillHome, AiOutlinePlusSquare } from 'react-icons/ai'
import { useNavigate, Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {

    const navigate = useNavigate()

  return (
    <div className='h-screen w-64 flex items-center overflow-auto text-lg'>
        <div className='border-8 p-2 h-3/6 flex justify-center flex-col w-full text-2xl'>
        <div className='border-b-2 m-2 mb-16 flex items-center'>
        <AiFillHome /> Kraber
        </div>
            <div className='m-4 flex items-center gap-3'>
                <AiFillHome /> 
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsSearch /> 
                <Link to="/search">
                    Search
                </Link>
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsFillChatHeartFill />
                <Link to="/messages">
                    Messages
                </Link> 
            </div>
            <div className='m-4 flex items-center gap-3'>
                <AiOutlinePlusSquare /> Create
            </div>
            <div className='m-4 flex items-center gap-3'>
                <CgProfile /> 
                <Link to="/profile/name">
                    Profile
                </Link>
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BiLogOut /> Logout
            </div>
        </div>
    </div>
  )
}

export default Sidebar
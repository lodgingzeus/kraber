import { BsSearch, BsFillChatHeartFill } from 'react-icons/bs'
import { AiFillHome, AiOutlinePlusSquare } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../store/slices/user/userSlice'
import { useNavigate, Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'
import CreatePostModal from '../../Pages/CreatePostModal/CreatePostModal'
import SearchModal from '../../Pages/SearchModal/SearchModal'

const Sidebar = () => {

    const currentUser = useSelector(state => state.user.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(setLogout())
        localStorage.removeItem("token")
        navigate("/")
    }

  return (
    <div className='h-screen w-64 flex items-center overflow-auto text-lg'>
        <div className='border-8 p-2 h-3/6 flex justify-center flex-col w-full text-2xl'>
        <div className='border-b-2 m-2 mb-16 flex items-center'>
        <AiFillHome /> Kraber
        </div>
            <div className='m-4 flex items-center gap-3'>
                <AiFillHome /> 
                <Link to="/home">
                    Home
                </Link>
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsSearch /> 
                <SearchModal />
            </div>
            <div className='m-4 flex items-center gap-3'>
                <BsFillChatHeartFill />
                <Link to="/messages">
                    Messages
                </Link> 
            </div>
            <div className='m-4 flex items-center gap-3'>
                <AiOutlinePlusSquare /> 
                <CreatePostModal />
            </div>
            <div className='m-4 flex items-center gap-3'>
                <CgProfile /> 
                <Link to={`/profile/${currentUser}`}>
                    Profile
                </Link>
            </div>
            <div onClick={handleLogOut} className='m-4 flex items-center gap-3 cursor-pointer'>
                <BiLogOut /> Logout
            </div>
        </div>
    </div>
  )
}

export default Sidebar
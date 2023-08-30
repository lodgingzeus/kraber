import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../../store/slices/user/userSlice'
import ichigo from '../../../assets/ichigo.jpg'

const LoginPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        
        const response = await fetch('http://localhost:8181/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
        const data = await response.json()
        if(data.token) {
            localStorage.setItem("token", data.token)
            
            dispatch(setLogin({
                token: data.token,
                user: data.user
            }))

            navigate('/home')
        }
        console.log(data)
    }
    
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="card card-side bg-base-100 shadow-xl">
    <figure><img src={ichigo} alt="Movie" className='h-[500px] w-[500px]'/></figure>
    <div className="card-body">
        <h2 className="card-title">Welcome back</h2>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-xl">Email</span>
            </label>
            <input ref={emailRef} type="text" placeholder="example@gmail.com" className="input input-accent input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text text-xl">Password</span>
            </label>
            <input ref={passRef} type="password" placeholder="*****" className="input input-accent input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs mt-8">
            <button type='submit' className='btn btn-accent' onClick={handleSubmit}>Login</button>
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <Link to={'/signup'} className="label-text">Don't have an account? Sign up</Link>
            </label>
        </div>
    </div>
    </div>
</div>

  )
}

export default LoginPage
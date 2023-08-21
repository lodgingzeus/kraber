import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ichigo from '../../../assets/ichigo.jpg'

const SignUpPage = () => {

    const navigate = useNavigate()
    const emailRef = useRef()
    const passRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        
        const response = await fetch('http://localhost:8181/auth/register', {
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
        if(data.message) navigate('/home')
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
                <button className='btn btn-accent' type='submit' onClick={handleSubmit}>Sign up</button>
            </div>
            <div className="form-control w-full max-w-xs">
            <label className="label">
                <Link to={'/'} className="label-text">Already have an account? Sign in</Link>
            </label>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignUpPage
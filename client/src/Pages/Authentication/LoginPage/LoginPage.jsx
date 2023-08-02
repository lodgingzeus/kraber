import React from 'react'
import ichigo from '../../../assets/ichigo.jpg'

const LoginPage = () => {
    
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
                <input type="text" placeholder="Email" className="input input-accent input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-xl">Password</span>
                </label>
                <input type="password" placeholder="Password" className="input input-accent input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-xl">Password</span>
                </label>
                <button className='btn btn-accent'>Login</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LoginPage
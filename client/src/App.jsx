import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/slices/counter/counterSlice'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Profile from './Pages/Profile/Profile'
import Search from './Pages/SearchModal/SearchModal'
import Conversations from './Pages/Converstaions/Conversations'
import LoginPage from './Pages/Authentication/LoginPage/LoginPage'

const App = () => {
  
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
      <BrowserRouter>
           {/* <h1 className='text-xs'>Current count is: {count}</h1>
          <button onClick={() => dispatch(increment())}>
            Add count
          </button>
          <button onClick={() => dispatch(decrement())}>
            Subtract count
          </button> */}
          <Routes>
            <Route path='/' element = { <LoginPage /> }/>
            <Route path='/home' element = { <HomePage /> }/>
            <Route path='/profile/:id' element = { <Profile /> }/>
            <Route path='/messages' element = { <Conversations /> }/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Profile from './Pages/Profile/Profile'
import Conversations from './Pages/Converstaions/Conversations'
import LoginPage from './Pages/Authentication/LoginPage/LoginPage'
import SignUpPage from './Pages/Authentication/SignUpPage/SignUpPage'

const App = () => {

  const isAuth = useSelector(state => state.user)
 
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element = { !isAuth ? <LoginPage /> : <Navigate to="/home" /> }/>
            <Route path='/signup' element = { <SignUpPage /> }/>
            <Route path='/home' element = { isAuth ? <HomePage /> : <Navigate to="/" /> }/>
            <Route path='/profile/:id' element = { <Profile /> }/>
            <Route path='/messages' element = { <Conversations /> }/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
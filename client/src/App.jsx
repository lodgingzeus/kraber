import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/slices/counter/counterSlice'
import HomePage from './components/HomePage/HomePage'

const App = () => {
  
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      {/* <h1 className='text-xs'>Current count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Add count
      </button>
      <button onClick={() => dispatch(decrement())}>
        Subtract count
      </button> */}
      <HomePage />
    </div>
  )
}

export default App
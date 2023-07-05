import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/slices/counter/counterSlice'

const App = () => {
  
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Current count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        Add count
      </button>
      <button onClick={() => dispatch(decrement())}>
        Subtract count
      </button>
    </div>
  )
}

export default App
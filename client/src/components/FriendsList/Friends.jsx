import React from 'react'
import { useNavigate } from 'react-router-dom'

const Friends = ( { friend } ) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/profile/${friend}`)
  }

  return (
    <div onClick={handleClick}>
      {friend}
    </div>
  )
}

export default Friends
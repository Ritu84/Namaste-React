import React from 'react'

const User = (props) => {
  return (
    <div className='user-card'>
        <h1>Name:{props.name}</h1>
        <h1>location: gujarat</h1>
        <h1>contact: @ritu84</h1>
    </div>
  )
}

export default User
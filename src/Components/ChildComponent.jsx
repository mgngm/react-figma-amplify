import React from 'react'

function ChildComponent({user}) {
  return (
    <div>
    {user.map(usre => (
        <p>Name: {user.name}</p>
        <p>Surname: {user.name}</p>
    ))}
  </div>
  )
}

export default ChildComponent
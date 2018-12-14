import React, { Component } from 'react'

function OnlineUsers({toggle, users}) {
  console.log(toggle)
  return (
    <div className={toggle ? "users" : "users--closed"}>
      <h2 className='users__title'>Online Users: {users.length}</h2>
      {
        users.map(user => (
          <div className='user' key={user.id}>
            <img className='user__img' src={user.img} alt='User'/>
            <span className='user__name'>{user.name}</span>
            <hr />
          </div>
        ))
      }
    </div>
  )

}

export default OnlineUsers
import React from 'react'
import PropTypes from 'prop-types'

OnlineUsers.propTypes = {
  toggle: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired  
}

function OnlineUsers({toggle, users}) {
  return (
    <div className={toggle ? 'users users--open' : 'users'}>
      <h2 className='users__title'>Online Users: {users.length}</h2>
      {
        users.map(user => (
          <div className='user' key={user.id}>
            <div className='user__container'>
              <img className='user__img' src={user.img} alt='User'/>
              <span className='user__name'>{user.name}</span>
            </div>
            <hr className='user__hr'/>
          </div>
        ))
      }
    </div>
  )
}

export default OnlineUsers
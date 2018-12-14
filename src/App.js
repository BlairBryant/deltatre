import React, { Component } from 'react'
import './App.css'
import OnlineUsers from './components/OnlineUsers'
import { reject } from 'q';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loadingUsers: true,
      onlineUsers: [],
      onlineUsersToggle: false
    }
  }

  componentDidMount() {
    let usersPromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve([{ id: 1, name: 'Sammy Slicker' }, { id: 2, name: 'John Hickory' }]), 2000)
    })
    usersPromise.then(users => {
      this.setState({ onlineUsers: users, loadingUsers: false })
    })
  }

  getUsers = async () => {

  }

  toggleOnlineUsers = () => {
    this.setState({ onlineUsersToggle: !this.state.onlineUsersToggle })
  }

  render() {
    const { loadingUsers, onlineUsers, onlineUsersToggle } = this.state
    return (
      <div className='home'>
        <h2 className='home__title'>Online Users</h2>
        {
          loadingUsers
            ?
            <button className='btn btn--blue btn--medium' disabled>Loading...</button>
            :
            <button className='btn btn--blue btn--medium' onClick={this.toggleOnlineUsers}>{onlineUsersToggle ? 'Hide Users' : 'Show Users'}</button>
        }
        <OnlineUsers toggle={onlineUsersToggle} users={onlineUsers} />
      </div>
    )
  }
}

export default App
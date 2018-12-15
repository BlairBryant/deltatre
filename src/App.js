import React, { Component } from 'react'
import './App.css'
import OnlineUsers from './components/OnlineUsers'

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
    // let usersPromise = new Promise((resolve, reject) => {
    //   setTimeout(() => resolve([
    //     { id: 1, name: 'Sammy Slicker', img: 'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' }, 
    //     { id: 2, name: 'John Hickory', img: 'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
    //     { id: 2, name: 'Elizabeth Macbeth', img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
    //     { id: 2, name: 'Mitch Fennigan', img: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
    //   ]), 2000)
    // })
    // usersPromise.then(users => {
    //   this.setState({ onlineUsers: users, loadingUsers: false })
    // })
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
            <button
              className='btn btn--blue btn--medium'
              onClick={this.toggleOnlineUsers}
            >
              {onlineUsersToggle ? 'Hide Users' : 'Show Users'}
            </button>
        }
        <OnlineUsers toggle={onlineUsersToggle} users={onlineUsers} />
      </div>
    )
  }
}

export default App
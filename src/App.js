import React, { Component } from 'react'
import './App.css'
import OnlineUsers from './components/OnlineUsers'
import mockedAJAX from './mockedAJAX'

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
    mockedAJAX().then(users => this.setState({onlineUsers: users, loadingUsers: false}))
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
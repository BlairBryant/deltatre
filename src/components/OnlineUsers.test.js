import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import OnlineUsers from './OnlineUsers'

configure({ adapter: new Adapter() })

describe('OnlineUsers tests', () => {
  let initialProps
  let mountedOnlineUsers
  let mountedApp

  beforeEach(() => {
    initialProps = { toggle: false, users: []}
    mountedOnlineUsers = mount(<OnlineUsers {...initialProps} />)
    mountedApp = mount(<App />)
  })

  it(`Initial props are properly set and props change to the correct 
  values after componentDidMount in App.js is finished executing`
  , async () => {
    expect(mountedOnlineUsers.props().toggle).toEqual(false)
    expect(mountedOnlineUsers.props().users).toHaveProperty('length', 0)
    function delayedTests() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          expect(mountedApp.state().onlineUsers).toHaveProperty('length', 4)
          resolve(mountedApp.state().loadingUsers)
        }, 3000)
      })
    }
    return await expect(delayedTests()).resolves.toEqual(false)
  })

  it('Always renders parent div .users', () => {
    const divs = mountedOnlineUsers.find('div.users')
    expect(divs.length).toBeGreaterThan(0)
  })
})
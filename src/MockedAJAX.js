function mockedAJAX() {
  let usersPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve([
      { id: 1, name: 'Sammy Slicker', img: 'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' }, 
      { id: 2, name: 'John Hickory', img: 'https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
      { id: 2, name: 'Elizabeth Macbeth', img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
      { id: 2, name: 'Mitch Fennigan', img: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60' },
    ]), 2000)
  })
  usersPromise.then(users => {
    this.setState({ onlineUsers: users, loadingUsers: false })
  })
}

export mockedAJAX
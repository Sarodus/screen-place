import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Welcome from './container/Welcome'
import Join from './container/Join'
import Host from './container/Host'
import Room from './container/Room'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Welcome}/>
          <Route path="/join" component={Join}/>
          <Route path="/host" component={Host}/>
          <Route path="/room/:hostId" component={Room}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
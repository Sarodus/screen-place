import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import history from './history'
import Welcome from './container/Welcome'
import Join from './container/Join'
import Host from './container/Host'
import Room from './container/Room'


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Welcome}/>
          <Route path="/join" component={Join}/>
          <Route path="/host" component={Host}/>
          <Route path="/room/:hostId" component={Room}/>
        </div>
      </Router>
    )
  }
}

export default App
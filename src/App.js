import React from 'react'
import { connect } from 'react-redux'
import { Router, Route } from 'react-router'
import history from './history'
import Welcome from './container/Welcome'
import Join from './container/Join'
import Host from './container/Host'
import Room from './container/Room'

const App = ({ready}) => {
  if (!ready) {
    return 'Loading token...'
  }
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

const mapStateToProps = state => ({
  ready: state.connection.ready,
})

export default connect(mapStateToProps)(App)
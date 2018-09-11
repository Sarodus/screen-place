import React, { Component } from 'react'
import Connect from '../components/Connect'
import RoomList from '../components/RoomList'

class Join extends Component {
  render() {
    return (
      <div>
        <Connect />
        <RoomList />
      </div>
    )
  }
}

export default Join
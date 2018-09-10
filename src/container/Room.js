import React, { Component } from 'react'
import { connect } from 'react-redux'
import Host from './Host'
import Guest from './Guest'


class Room extends Component {
  render() {
    if (this.props.match.params.hostId === this.props.hostId) {
        return <Host />
    }
    return <Guest />
  }
}

const mapStateToProps = state => ({
  hostId: state.connection.id
})

export default connect(mapStateToProps)(Room)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { peerConnect } from '../actions'
import Host from './Host'
import Guest from './Guest'

class Room extends Component {
    componentDidMount() {
        if (this.props.hostId && this.props.hostId !== this.props.match.params.hostId) {
            this.props.peerConnect(this.props.match.params.hostId)
        }
    }

    render() {
        if (this.props.match.params.hostId === this.props.hostId) {
            return <Host />
        } else if(this.props.hostId) {
            return <Guest />
        }
        return <Redirect to="/" />
  }
}

const mapStateToProps = state => ({
    hostId: state.connection.id
})

const mapDispatchToProps = dispatch => ({
    peerConnect: otherId => dispatch(peerConnect(otherId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Room)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { peerConnect } from '../actions'
import Host from './Host'
import Guest from './Guest'

class Room extends Component {
    componentDidMount() {
        this.handleProps(this.props)
    }

    componentWillReceiveProps(newProps) {
        this.handleProps(newProps)
    }

    handleProps = props => {
        if (
            !props.connected &&
            !props.connecting &&
            !props.fail &&
            props.hostId !== props.match.params.hostId) {
            props.peerConnect(props.match.params.hostId)
        }
    }

    render() {
        if (this.props.match.params.hostId === this.props.hostId) {
            return <Host />
        }
        if (this.props.fail) {
            return <Redirect to="/" />
        }
        if(this.props.connected) {
            return <Guest />
        }
        return 'LOADIN!!...'
  }
}

const mapStateToProps = state => ({
    hostId: state.connection.id,
    ready: state.connection.ready,
    otherId: state.connection.otherId,
    connecting: state.connection.connecting,
    connected: state.connection.connected,
    fail: state.connection.fail,
})

const mapDispatchToProps = dispatch => ({
    peerConnect: otherId => dispatch(peerConnect(otherId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Room)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { peerConnect } from '../actions'

class Info extends Component {
    state = {
        otherId: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    connect = () => {
        this.props.peerConnect(this.state.otherId)
    }

    render() {
        return (
            <div>
                My ID: {this.props.id}
                <br />
                <input type="text" name="otherId" onChange={this.handleChange} />
                <button onClick={this.connect}>Connect</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.connection.id,
    connections: state.connection.connections
})

const mapDispatchToProps = dispatch => ({
    peerConnect: otherId => dispatch(peerConnect(otherId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Info)
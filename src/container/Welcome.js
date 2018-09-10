import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Join = () =>
    <Link to="/join">
        Join
    </Link>

const Host = ({hostId}) => {
    if (hostId) {
        return (
            <Link to={`/room/${hostId}`}>
                Host
            </Link>
        )
    }
    return <span>Host (generating id...)</span>
}


class Welcome extends Component {
  render() {
    return (
        <div>
            <Join />
            <Host hostId={this.props.hostId} />
        </div>
    )
  }
}


const mapStateToProps = state => ({
    hostId: state.connection.id
  })

export default connect(mapStateToProps)(Welcome)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Welcome extends Component {
  render() {
    const { hostId } = this.props
    return (
        <div>
            <Button as={Link} to="/join">
                Join
            </Button>
            <Button as={Link} to={`/room/${hostId}`}>
                Host
            </Button>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    hostId: state.connection.id
})

export default connect(mapStateToProps)(Welcome)
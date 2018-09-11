import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import history from '../history'

class Connect extends Component {
    state = {
        otherId: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    goToRoom = () => {
        history.push(`/room/${this.state.otherId}`)
    }

    render() {
        return (
            <div>
                <Input type="text" name="otherId" onChange={this.handleChange} />
                <Button onClick={this.goToRoom}>Connect</Button>
            </div>
        )
    }
}

export default Connect
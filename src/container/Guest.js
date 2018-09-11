import React, { Component } from 'react'
import { connect } from 'react-redux'
import { peerConnect } from '../actions'
import providers from '../providers'


class Guest extends Component {
  componentWillMount() {
    this.connect(this.props.hostId)
  }

  connect = otherId => {
    this.props.peerConnect(otherId)
  }

  render() {
    const { provider } = this.props
    const Provider = provider ? providers[provider].component : null
    return (
      <div>
        {provider && (
          <Provider />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hostId: state.connection.id,
  provider: state.search.provider,
  search: state.search.search,
})

const mapDispatchToProps = dispatch => ({
  peerConnect: otherId => dispatch(peerConnect(otherId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Guest)
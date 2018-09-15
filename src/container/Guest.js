import React, { Component } from 'react'
import { connect } from 'react-redux'
import providers from '../providers'


class Guest extends Component {
  render() {
    const { provider } = this.props
    const Provider = provider ? providers[provider].component : null
    return (
      <div>
        {provider}
        {provider && (
          <Provider />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  provider: state.video.provider,
  search: state.video.search,
})


export default connect(mapStateToProps)(Guest)
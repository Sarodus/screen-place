import React, { Component } from 'react'
import { connect } from 'react-redux'
import Info from './components/Info'
import Search from './components/Search'
import providers from './providers'


class App extends Component {
  render() {
    const { provider } = this.props
    const Provider = provider ? providers[provider].component : null
    return (
      <div className="App">
        <Info />
        <Search />
        {provider && (
          <Provider />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  provider: state.search.provider,
  search: state.search.search,
})

export default connect(mapStateToProps)(App)

import React, { Component } from 'react'
import YouTubeVideo from './components/YouTubeVideo'
import Info from './components/Info'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Info />
        <YouTubeVideo videoId="FGBhQbmPwH8" />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

const opts = {
  playerVars: {
    // autoplay: 1
  }
}
const allowSecondsNoJump = 5

class YouTubeVideo extends Component {
  state = {
    currentTime: 0,
    target: null
  }

  onPlay = () => {
    this.state.target.playVideo()
  }

  onPause = () => {
    this.state.target.pauseVideo()
  }

  onJump = pos => {
    if (this.haveToJump(this.state.currentTime, pos)) {
      this.state.target.seekTo(pos)
    }
  }

  sendPlay = () => {
    console.log('Send play!')
  }
  sendPause = () => {
    console.log('Send pause!')
  }
  sendJump = time => {
    console.log('Send jump!', time)
  }

  onStateChange = ({data}) => {
    switch(data) {
      case 0:
        console.log('Video end!')
        break
      case 1:
        return this.sendPlay()
      case 2:
        return this.sendPause()
      case 3:
        console.log('Buffering! take care! Send slow If its buffering for more than X seconds')
        break
      default:
        break
    }
  }

  onReady = ({target}) => {
    this.setState({target})
    this.tickInterval = setInterval(() => this.tick(target), 1000)
  }

  haveToJump = (last, current) => {
    return Math.abs(last - current) > allowSecondsNoJump
  }

  tick = target => {
    const lastTime = this.state.currentTime
    const currentTime = target.getCurrentTime()
    if (this.haveToJump(lastTime, currentTime)) {
      this.sendJump(currentTime)
    }
    this.setState({currentTime})
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval)
  }

  render() {
    return (
        <YouTube
          opts={opts}
          videoId={this.props.videoId}
          onStateChange={this.onStateChange}
          onReady={this.onReady}
        />
    )
  }
}

YouTubeVideo.propTypes = {
  videoId: PropTypes.string.isRequired
}

export default YouTubeVideo

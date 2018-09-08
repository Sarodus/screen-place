import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import {
  controlSendPlay,
  controlSendPause,
  controlSendJump
} from '../actions'
import {
  CONTROL_SEND_PLAY,
  CONTROL_SEND_PAUSE,
  CONTROL_SEND_JUMP,
} from '../constants'


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

  componentWillUnmount() {
    clearInterval(this.tickInterval)
    let element = window || document
    element.removeEventListener(CONTROL_SEND_PLAY)
    element.removeEventListener(CONTROL_SEND_PAUSE)
    element.removeEventListener(CONTROL_SEND_JUMP)

  }

  componentDidMount() {
    let element = window || document
    element.addEventListener(CONTROL_SEND_PLAY, this.onPlay)
    element.addEventListener(CONTROL_SEND_PAUSE, this.onPause)
    element.addEventListener(CONTROL_SEND_JUMP, this.onJump)
  }

  tick = target => {
    const lastTime = this.state.currentTime
    const currentTime = target.getCurrentTime()
    if (this.haveToJump(lastTime, currentTime)) {
      this.props.sendJump(currentTime)
    }
    this.setState({currentTime})
  }

  onPlay = () => {
    this.state.target.playVideo()
  }

  onPause = () => {
    this.state.target.pauseVideo()
  }

  onJump = event => {
    if (this.haveToJump(this.state.currentTime, event.detail.time)) {
      this.state.target.seekTo(event.detail.time)
    }
  }

  onStateChange = ({data}) => {
    switch(data) {
      case 0:
        console.log('Video end!')
        break
      case 1:
        return this.props.sendPlay()
      case 2:
        return this.props.sendPause()
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

const mapDispatchToProps = dispatch => ({
  sendPlay: () => dispatch(controlSendPlay()),
  sendPause: () => dispatch(controlSendPause()),
  sendJump: time => dispatch(controlSendJump(time)),
})

export default connect(null, mapDispatchToProps)(YouTubeVideo)

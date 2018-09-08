import React, { Component } from 'react'
import WebTorrent from 'webtorrent'


class Torrent extends Component {
  constructor(props) {
    super(props)

    this.client = new WebTorrent()
    this.magnetId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel'
  }

  componentDidMount() {
    console.log('goes!', this.client, this.magnetId)
    this.client.add(this.magnetId, torrent => {
      console.log(torrent.files)
    })
  }

  render() {
      return <div>YAY, Torrent!</div>
  }
}
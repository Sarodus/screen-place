import React, { Component } from 'react'
import { connect } from 'react-redux'
import getYoutubeId from 'get-youtube-id'
import { searchDone } from '../../actions'

class Search extends Component {
    state = {
        search: ''
    }

    parser = search => {
        if (search.length === 11)
            return search
        return getYoutubeId(search)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        this.props.makeSearch(this.parser(this.state.search))
    }

    render() {
        return (
            <div>
                <label htmlFor="search-input">Search</label>
                <input
                    id="search-input"
                    type="text"
                    name="search"
                    onChange={this.handleChange}
                    placeholder="Insert YouTube url or videoID" />
                <button onClick={this.onSubmit}>
                    Submit
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchDone: (provider, search) => dispatch(searchDone(provider, search))
})

export default connect(null, mapDispatchToProps)(Search)
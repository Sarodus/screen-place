import React, { Component } from 'react'
import { connect } from 'react-redux'
import providers from '../providers'
import { searchDone } from '../actions'
import { SEARCH_DONE } from '../constants'


const Providers = ({selected, onChange}) => (
    <ul>
        {Object.keys(providers).map(provider => <Provider key={provider} provider={provider} selected={selected} onChange={onChange} />)}
    </ul>
)

const Provider = ({provider, selected, onChange}) => (
    <li>
        <input id={`provider-${provider}`} type="radio" name="provider" value={provider} checked={selected === provider} onChange={onChange} />
        <label htmlFor={`provider-${provider}`}>{provider}</label>
    </li>
)

class Search extends Component {
    state = {
        provider: '',
        search: '',
    }

    componentDidMount() {
        let element = window || document
        element.addEventListener(SEARCH_DONE, this.onSearch)
    }
    componentWillUnmount() {
        let element = window || document
        element.removeEventListener(SEARCH_DONE)
    }

    onSearch = e => {
        this.setState({
            provider: e.detail.provider,
            search: e.detail.search,
        }, this.makeSearch)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    makeSearch = () => {
        const provider = this.state.provider
        const search = providers[provider].parser(this.state.search)
        if (search) {
            this.props.searchDone(provider, search)
        }
    }

    render() {
        return (
            <div>
                <Providers selected={this.state.provider} onChange={this.handleChange} />
                {this.state.provider && (
                    <div>
                        <label htmlFor="search-input">Search</label>
                        <input id="search-input" type="text" name="search" onChange={this.handleChange} placeholder={providers[this.state.provider].placeholder} />
                        <button onClick={this.makeSearch}>Submit</button>
                    </div>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchDone: (provider, search) => dispatch(searchDone(provider, search))
})

export default connect(null, mapDispatchToProps)(Search)
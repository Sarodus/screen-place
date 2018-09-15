import React, { Component } from 'react'
import { connect } from 'react-redux'
import providers from '../providers'
import { searchDone } from '../actions'

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
        provider: ''
    }

    onSearch = e => {
        const search = e.detail.search
        this.setState({
            provider: e.detail.provider
        }, () => this.makeSearch(search))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    makeSearch = search => {
        const { provider } = this.state
        console.log('makeSearch', provider, search)
        if (search) {
            this.props.searchDone(provider, search)
        }
    }

    render() {
        const { provider } = this.state
        let ProviderForm
        if (provider)
            ProviderForm = providers[this.state.provider].form
        return (
            <div>
                <Providers selected={provider} onChange={this.handleChange} />
                {provider && <ProviderForm makeSearch={this.makeSearch} />}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchDone: (provider, search) => dispatch(searchDone(provider, search))
})

export default connect(null, mapDispatchToProps)(Search)
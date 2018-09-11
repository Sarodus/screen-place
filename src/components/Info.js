import React from 'react'
import { connect } from 'react-redux'

const Info = ({id}) => (
    <div>
        My ID: {id}
    </div>
)

const mapStateToProps = state => ({
    id: state.connection.id,
})

export default connect(mapStateToProps)(Info)
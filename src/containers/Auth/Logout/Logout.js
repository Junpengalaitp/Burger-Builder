import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/indexAction'
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    componentDidMount () {
        this.props.onLogout()
    }

    render() {
        return <Redirect to='/' />
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

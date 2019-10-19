import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/indexAction'
import { Redirect } from 'react-router-dom';

const Logout = props => {

    useEffect(() => {
        props.onLogout()
    }, [])

    return <Redirect to='/' />

}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)

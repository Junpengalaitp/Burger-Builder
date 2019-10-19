import React, { useState, Fragment } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';


const layout = props => {

    const [sideDrawerIsVisble, setSideDrawerIsVisble] = useState(false)


    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisble(false)
    }
    
    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisble(!sideDrawerIsVisble)
    }


    return (
        <Fragment>
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer 
                isAuth={props.isAuthenticated}
                open={sideDrawerIsVisble} closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout)
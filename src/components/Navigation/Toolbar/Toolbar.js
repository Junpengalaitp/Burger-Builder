import React from 'react'
<<<<<<< HEAD
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
=======

import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavgationItems/NavigationItems'
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler'

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerTogglerClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
        </nav>
    </header>
)

export default Toolbar

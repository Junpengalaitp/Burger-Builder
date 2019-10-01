<<<<<<< HEAD
import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
=======
import React, { Fragment } from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavgationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {

  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
      
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Fragment>  
  )
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
}

export default SideDrawer

import React from 'react'
import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>MENU
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default DrawerToggle

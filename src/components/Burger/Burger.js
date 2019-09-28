import React from 'react'
import classes from './Burger.module.css'
import BurgerIngradients from './BurgerIngradients.js/BurgerIngradients';


const Burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngradients type="bread-top" />
            <BurgerIngradients type="cheese" />
            <BurgerIngradients type="meat" />
            <BurgerIngradients type="bread-bottom" />
        </div>
    )
}

export default Burger

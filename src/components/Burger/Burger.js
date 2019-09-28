import React from 'react'
import classes from './Burger.module.css'
import BurgerIngradients from './BurgerIngradients.js/BurgerIngradients';


const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngradients key={igKey + i} type={igKey} />
            })
        });
    return (
        <div className={classes.Burger}>
            <BurgerIngradients type="bread-top" />
            {transformedIngredients}
            <BurgerIngradients type="bread-bottom" />
        </div>
    )
}

export default Burger

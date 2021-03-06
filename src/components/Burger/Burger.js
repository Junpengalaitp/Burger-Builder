import React from 'react'
// import { withRouter } from 'react-router-dom'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
    console.log(props);
    
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />
            })
        })
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredients);
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    )
}

export default Burger

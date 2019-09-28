import React from 'react'
import classes from './Burger.module.css'
import BurgerIngradients from './BurgerIngradients.js/BurgerIngradients';


const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngradients key={igKey + i} type={igKey} />
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
            <BurgerIngradients type="bread-top" />
            {transformedIngredients}
            <BurgerIngradients type="bread-bottom" />
        </div>
    )
}

export default Burger

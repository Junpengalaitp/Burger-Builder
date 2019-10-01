import React from 'react'
import classes from './Burger.module.css'
<<<<<<< HEAD
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
=======
import BurgerIngredient from '../Burger/Burgeringredient/Burgeringredient'

const Burger = ( props ) => {
    console.log(props)
    let transformedIngredients = Object.keys(props.ingredients)
        .map( igKey => {
            return [...Array(props.ingredients[igKey])].map(( _, i ) => {
                return <BurgerIngredient key={igKey + i} type = {igKey} />
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, [])
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    // console.log(transformedIngredients)
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />     
        </div>
  )
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
}

export default Burger

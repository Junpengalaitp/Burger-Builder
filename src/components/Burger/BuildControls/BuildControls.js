import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

<<<<<<< HEAD
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>CurrentPrice: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label}
                    added={props.ingredientAdded.bind(this, ctrl.type)}
                    removed={props.ingredientRemoved.bind(this, ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
        </div>   
    )
=======

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                type={ctrl.type}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
    <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >ORDER NOW</button>    
    </div>
  )
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
}

export default BuildControls

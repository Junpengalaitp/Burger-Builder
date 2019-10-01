import React from 'react'
<<<<<<< HEAD
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}> 
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
)
=======
import classes from './BuildControl.module.css'

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.added}>More</button>
    </div>
  )
}
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16

export default BuildControl

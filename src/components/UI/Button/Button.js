import React from 'react'
import classes from './Button.module.css'

const Button = (props) => (
<<<<<<< HEAD
    <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

export default Button;
=======
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
)

export default Button
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16

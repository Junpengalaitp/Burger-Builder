<<<<<<< HEAD
import React from 'react'
import classes from './Modal.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
    )
=======
import React, { Component, Fragment } from 'react'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextStates) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentDidUpdate () {
    console.log('[Modal] will update')
  }

  render (){
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
          <div 
              className={classes.Modal}
              style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1': '0'
              }}>
            {this.props.children}
          </div>
      </Fragment>     
    )
  }
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
}

export default Modal

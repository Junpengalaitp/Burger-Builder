import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import * as actions from '../../store/actions/indexAction';

export const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false)

    useEffect(() => {
        props.onInitIngredients()
    }, [])

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0)
        return sum > 0
    }

    const purchaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true)
        } else {
            props.onSetAuthRedirectPath('/checkout')
            props.history.push('/auth')
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false)
    } 

    const purchaseContinuedHandler = () => {
        props.onInitPurchase()
        props.history.push('/checkout')
    }


    const disabledInfo = {
        ...props.ings
    }
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = props.error ? <h1>Ingredients can't be loaded!</h1> : <Spinner />

    if (props.ings) {
        burger = (
            <Fragment>
                <Burger ingredients={props.ings}/>
                <BuildControls 
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    purchasable={updatePurchaseState(props.ings)}
                    price={props.price}
                    ordered={purchaseHandler}
                    isAuth={props.isAuthenticated} />
            </Fragment>)
        orderSummary = <OrderSummary ingredients={props.ings} purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinuedHandler} price={props.price} />
    }

    if (props.loading) {
        orderSummary = <Spinner />
    }

    return (
        <Fragment>
            <Modal show={purchasing} modalClosed={purchaseCancelHandler} >
                {orderSummary}
            </Modal> 
            {burger}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))
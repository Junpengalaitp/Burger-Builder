import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility'

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const addIngredient = (state, action) => {
    const IngredientAdded = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const IngredientsAdded = updateObject(state.ingredients, IngredientAdded)
    const AddedState = {
        ingredients: IngredientsAdded,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, AddedState)
}

const removeIngredient = (state, action) => {
    const IngredientRemoved = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const IngredientsRemoved = updateObject(state.ingredients, IngredientRemoved)
    const StateRemoved = {
        ingredients: IngredientsRemoved,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true
    }
    return updateObject(state, StateRemoved)
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return addIngredient(state, action)

        case actionTypes.REMOVE_INGREDIENTS:
            return removeIngredient(state, action)
            
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action)

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true })
        default:
            return state;
    }
}

export default reducer
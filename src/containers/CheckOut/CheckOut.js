import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary'
import ContactData from '../../containers/CheckOut/ContactData/ContactData'

class CheckOut extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 3,
            bacon: 4
        }
    }

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack()
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data')
    }


    render() {
        return (
            <div>
                <CheckOutSummary
                 ingredients={this.state.ingredients}
                 checkoutCancelled={this.checkoutCancelledHandler}
                 checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} 
                            component={ContactData}/> 
            </div>
        );
    }
}

export default CheckOut;

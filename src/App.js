import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/indexAction'
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


const asyncCheckout = asyncComponent(() => {
  return import('./containers/CheckOut/Checkout')
})

const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})

const app = props => {

  useEffect(() => {
    props.onTryAutoSignup();
  }, [])

    let routes = (
      <Switch>  
        <Route path='/auth' component={asyncAuth}/>
        <Route path='/' exact component={BurgerBuilder}/>
        <Redirect to='/' />
      </Switch>
    )

    if (props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path='/checkout' component={asyncCheckout}/>  
            <Route path='/orders' component={asyncOrders}/> 
            <Route path='/logout' component={Logout}/> 
            <Route path='/auth' component={asyncAuth}/>
            <Route path='/' exact component={BurgerBuilder}/>
            <Redirect to='/' />
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null
})

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app));

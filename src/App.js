import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/CheckOut/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/indexAction'
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' component={Checkout}/>  
            <Route path='/orders' component={Orders}/>  
            <Route path='/auth' component={Auth}/> 
            <Route path='/logout' component={Logout}/>   
            <Route path='/' exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

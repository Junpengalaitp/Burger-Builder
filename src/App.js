import React, { Component } from 'react';
<<<<<<< HEAD
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
=======
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/CheckOut/CheckOut'
import Orders from './containers/Orders/Orders'
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16

class App extends Component {
  // state = {
  //   show: true
  // }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false})
  //   }, 5000)
  // }

  render() {
    return (
      <div>
        <Layout>
<<<<<<< HEAD
          <BurgerBuilder />
=======
          {/* {this.state.show ? <BurgerBuilder />: null} */}
            <Switch>
              <Route path='/checkout' component={Checkout}/>
              <Route path='/orders' exact component={Orders}/>
              <Route path='/' exact component={BurgerBuilder}/>
            </Switch>        
>>>>>>> 23132e18e5e99ceff2cc754f4ff6ce73fc5cbf16
        </Layout>
      </div>
    );
  }
}

export default App;

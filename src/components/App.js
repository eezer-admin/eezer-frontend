import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';

import '../App.css';

import Nav from './Nav';
import Login from './Login/Login';
import Home from './Home';
import Transports from './Transports/Transports';
import Users from './Users/Users';
import Vehicles from './Vehicles';
import RouteMap from './RouteMap';
import NotFoundPage from './NotFound';

class Reports extends Component {
  render() {
    return (<h2>This is where we can present reports based on driver or vehicle, like tot distance travelled and so forth.</h2>)
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/transports' component={Transports} />
            <PrivateRoute path='/reports' component={Reports} />
            <Route path='/users' component={Users} />
            <Route path='/vehicles' component={Vehicles} />
            <Route path='/routemap/:id' component={RouteMap} />

            { /* 404 error page */ }
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

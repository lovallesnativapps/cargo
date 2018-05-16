import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';

import Login from './components/session/components/Login/Login';
import Signin from './components/session/components/Signin/Signin';
import Dashboard from './components/dashboard/components/DashboardContent/DashboardView';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/Signin" component={Signin}></Route>
          <Route path="/Dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

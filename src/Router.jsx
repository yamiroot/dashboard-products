import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PageError from './components/PageError';


const Router = () => {
  return (
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />
        <Route
          path="/login"
          render={() => <Login name="Login" />}
        />
        <Route
          path="/dashboard"
          render={() => <Dashboard name="Dashboard" />}
        />
        <Route component={PageError} />
      </Switch>
  );
}


export default Router;

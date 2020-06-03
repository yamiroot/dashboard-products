import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import { AuthProvider } from "./components/Auth";
import Login from './components/Login';
import PrivateRoute from "./route/PrivateRoute";
import Dashboard from './components/Dashboard';
import PageError from './components/PageError';


const Router = () => {
  return (
    <AuthProvider>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
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
    </AuthProvider>
  );
}


export default Router;

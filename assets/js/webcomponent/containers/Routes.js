import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import auth from '../utils/auth';

import NotFound from '../components/NotFound';
import Logout from '../components/Logout';
import PrivateRoute from '../components/PrivateRoute';
import PrivateUserRoute from '../components/PrivateUserRoute';

import ConnectedLoginContainer from './LoginContainer';
import ConnectedSignUpContainer from './SignUpContainer';
import ConnectedMyCitiesContainer from './MyCitiesContainer';

class Routes extends React.Component {
  render() {
    const isAuthed = auth.isAuthenticated();

    return (
      <Switch>
        <Redirect exact from='/' to={isAuthed ? '/auth' : '/logout'} />
        <PrivateRoute exact path='/auth' authed={isAuthed} defaultHomePath='/mycities' />

        <Route exact path='/logout' component={Logout} />
        <Route exact path='/login' component={ConnectedLoginContainer} />
        <Route exact path='/signup' component={ConnectedSignUpContainer} />

        <PrivateUserRoute exact path='/mycities' authed={isAuthed} component={ConnectedMyCitiesContainer} />

        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;

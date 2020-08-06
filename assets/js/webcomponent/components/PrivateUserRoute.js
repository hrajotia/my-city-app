import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import auth from '../utils/auth';

import UserHome from '../containers/user/UserHome';

export default function PrivateUserRoute({ component: Component, ...rest }) {
  const isAuthed = auth.isAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) => isAuthed === true
        ? (
          <UserHome history={props.history}>
            <Component {...props} />
          </UserHome>
          )
        : <Redirect to={{ pathname: '/logout', state: { from: props.location } }} />}
    />
  );
}

PrivateUserRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  authed: PropTypes.bool,
  history: PropTypes.object,
  location: PropTypes.object
};

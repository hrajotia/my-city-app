import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from '../components/NotFound';
import ConnectedMyCitiesContainer from './MyCitiesContainer';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Redirect exact from='/' to='mycities' />
        <Route exact path='/mycities' component={ConnectedMyCitiesContainer} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;

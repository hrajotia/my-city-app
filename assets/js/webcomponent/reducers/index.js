import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import app from './appReducer';
import myCities from './myCitesReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  myCities
});

export default rootReducer;

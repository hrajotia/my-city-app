import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './appReducer';
import user from './userReducer';
import myCities from './myCitesReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  user,
  myCities
});

export default rootReducer;

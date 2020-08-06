import { cloneDeep, isPlainObject, isEmpty } from 'lodash';

import { FETCH_MY_CITIES_PAGINATED, FETCH_MY_CITIES_PAGINATED_SUCCESS, FETCH_MY_CITIES_PAGINATED_FAILURE, DO_LOGOUT } from '../constants/actionTypes';
import initialState from './initialState';

export default function myCitesReducer(state = cloneDeep(initialState.myCities), action) {
  switch (action.type) {
    case FETCH_MY_CITIES_PAGINATED: {
      const newState = cloneDeep(state);
      newState.errMsg = '';
      return newState;
    }

    case FETCH_MY_CITIES_PAGINATED_SUCCESS: {
      const data = isPlainObject(action.data) && action.data && action.data.data;
      const newState = cloneDeep(state);
      if (!isEmpty(data)) {
        newState.paginated.data = data.items;
        newState.paginated.page = (data.page + 1);
        newState.paginated.perPage = data.limit;
        newState.paginated.totalSize = data.total;
        newState.paginated.sort = data.sort;
      }
      return newState;
    }

    case FETCH_MY_CITIES_PAGINATED_FAILURE: {
      const newState = cloneDeep(state);
      if (action.data && action.data.error) {
        newState.errMsg = action.data.error;
      } else {
        newState.errMsg = 'generic.server_error_msg';
      }
      return newState;
    }

    case DO_LOGOUT: {
      return cloneDeep(initialState.myCities);
    }

    default:
      return state;
  }
}

import {cloneDeep, isEmpty} from 'lodash';

import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = cloneDeep(initialState.app), action) {
  switch (action.type) {
    case types.FETCH_TRANSLATIONS_SUCCESS: {
      const newState = cloneDeep(state);
      const locale = action.payload && action.payload.locale;
      const translation = action.data && action.data.data;
      if (locale && !isEmpty(translation)) {
        newState.translations[locale] = translation;
      }
      return newState;
    }

    default:
      return state;
  }
}

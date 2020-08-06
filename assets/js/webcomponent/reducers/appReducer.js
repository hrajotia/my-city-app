import { cloneDeep, isEmpty } from 'lodash';

import { FETCH_TRANSLATIONS_SUCCESS } from '../constants/actionTypes';
import initialState from './initialState';

export default function appReducer(state = cloneDeep(initialState.app), action) {
  switch (action.type) {
    case FETCH_TRANSLATIONS_SUCCESS: {
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

import * as types from '../constants/actionTypes';
import constants from '../constants';
import { REQUEST, sendRequest } from '../utils/networkUtils';

export const fetchTranslation = (locale = constants.app.defaultLocale) => {
  return sendRequest(types.FETCH_TRANSLATIONS, REQUEST.GET, `/translation?locale=${locale}`, { locale });
};

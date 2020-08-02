import * as types from '../constants/actionTypes';
import { REQUEST, sendRequest } from '../utils/networkUtils';

export const updateMyCityProperty = (field, value) => {
  return {
    type: types.UPDATE_MY_CITY_PROPERTY,
    field,
    value
  };
};

export const validateMyCityProperty = (field, value) => {
  return {
    type: types.VALIDATE_MY_CITY_PROPERTY,
    field,
    value
  };
};

export const resetMyCityData = (fields) => {
  return {
    type: types.RESET_MY_CITY_DATA,
    fields
  };
};

export const fetchMyCities = (limit = 10) => {
  return sendRequest(types.FETCH_MY_CITIES, REQUEST.GET, `/mycity?limit=${limit}`);
};

export const fetchMyCitiesPaginated = (page, limit, sort, startDate, endDate) => {
  return sendRequest(types.FETCH_MY_CITIES_PAGINATED, REQUEST.GET, `/mycity/paginate?page=${page}&limit=${limit}&sort=${sort}${startDate ? `&startDate=${startDate}` : ''}${endDate ? `&endDate=${endDate}` : ''}`);
};

export const deleteMyCity = (id) => {
  return sendRequest(types.DELETE_MY_CITY, REQUEST.DELETE, `/mycity/${id}`);
};

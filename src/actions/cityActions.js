import * as types from './actionTypes';

export function fetchCitiesList() {
  return { type: types.FETCH_CITIES };
}

export function updateCitiesList(cityDetails) {
  return { type: types.UPDATE_CITIES, payload: cityDetails };
}

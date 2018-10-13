import * as types from './actionTypes';

export function fetchCountriesList() {
  return { type: types.FETCH_COUNTRIES };
}

export function updateCountriesList(countryetails) {
  return { type: types.UPDATE_COUNTRIES, payload: countryetails };
}

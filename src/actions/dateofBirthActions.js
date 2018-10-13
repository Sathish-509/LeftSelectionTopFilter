import * as types from './actionTypes';

export function fetchDateOfBirthList() {
  return { type: types.FETCH_DATEOFBIRTH };
}

export function updateDateOfBirthList(dateOfBirthDetails) {
  return { type: types.UPDATE_DATEOFBIRTH, payload: dateOfBirthDetails };
}

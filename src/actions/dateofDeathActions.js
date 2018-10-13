import * as types from './actionTypes';

export function fetchdateOfDeathList() {
  return { type: types.FETCH_DATEOFDEATH };
}

export function updateDateOfDeathList(dateOfDeathDetails) {
  return { type: types.UPDATE_DATEOFDEATH, payload: dateOfDeathDetails };
}

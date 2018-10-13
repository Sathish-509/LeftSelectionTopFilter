import * as types from './actionTypes';

export function fetchStatesList() {
  return { type: types.FETCH_STATES };
}

export function updateStatesList(stateDetails) {
  return { type: types.UPDATE_STATES, payload: stateDetails };
}

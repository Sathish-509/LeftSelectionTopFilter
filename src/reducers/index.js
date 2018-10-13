import { combineReducers } from 'redux';
import city from './cityReducer';
import country from './countryReducer';
import dateOfBirth from './dateOfBirthReducer';
import dateOfDeath from './dateOfDeathReducer';
import state from './stateReducer';

export default combineReducers({
    city,
    country,
    dateOfBirth,
    dateOfDeath,
    state
});

import { combineReducers } from 'redux';

import historyReducer from './history';
import pokemonReducer from './pokemon'; 

export default combineReducers({
    historyReducer,
    pokemonReducer
})
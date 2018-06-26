import { fork } from 'redux-saga/effects';

import { pokemonSaga, singlePokemonSaga, fetchMyListSaga } from './pokemon';


export default function* rootSaga() {
	yield fork(pokemonSaga);
	yield fork(singlePokemonSaga);
	yield fork(fetchMyListSaga);
}
import { fork } from 'redux-saga/effects';

import { pokemonSaga, singlePokemonSaga, fetchMyListSaga, fetchNextPokemonList } from './pokemon';


export default function* rootSaga() {
	yield fork(pokemonSaga);
	yield fork(singlePokemonSaga);
	yield fork(fetchMyListSaga);
	yield fork(fetchNextPokemonList);
}
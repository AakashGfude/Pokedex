import { take, put, call } from 'redux-saga/effects';
import Api from '../Api'

function* fetchAllPokemon() {
	try {
		const data = yield call(Api.fetchAllPokemonLists);
		yield put({ type: 'POKEMON_FETCH_SUCCESS', payload: data.results });
		yield put({ type: 'SET_NEXT_FETCH_URL', payload: data.next })
		return data;
	} catch (error) {
		yield put({ type: 'POKEMON_FETCH_ERROR', error })
	}
}

function* fetchNextPokemon(url) {
	try {
		const data = yield call(Api.fetchPokemonThroughUrl, url);
		yield put({ type: 'NEXT_POKEMON_FETCH_SUCCESS', payload: data.results });
		yield put({ type: 'SET_NEXT_FETCH_URL', payload: data.next })
	} catch (error) {
		yield put({ type: 'POKEMON_FETCH_ERROR', error })
	}
}

function* fetchSinglePokemon(url) {
	try {
		const data = yield call(Api.fetchPokemonThroughUrl, url);
		yield put({ type: 'SINGLE_POKEMON_FETCH_SUCCESS', payload: data });
	} catch (error) {
		yield put({ type: 'SINGLE_POKEMON_FETCH_ERROR', error })
	}
}

export function* pokemonSaga() {
	while (true) {
		yield take('FETCH_POKEMON');
		yield call(fetchAllPokemon);
	}
}

export function* singlePokemonSaga() {
	while (true) {
		const action = yield take('FETCH_SINGLE_POKEMON');
		yield call(fetchSinglePokemon, action.payload)
	}
}

export function* fetchMyListSaga() {
	const obj = yield call([localStorage, 'getItem'], 'myList');
	if (obj) {
		yield put({ type: 'POPULATE_MY_LIST', payload: obj })
	}
}

export function* fetchNextPokemonList() {
	while (true) {
		const action = yield take('FETCH_NEXT_LIST');
		yield call(fetchNextPokemon, action.payload);
	}
}

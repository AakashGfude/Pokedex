export default function pokemon(state = {
	pokemonList: [],
	singlePokemonData: null,
	pokemonListErr: '',
	singlePokemonDataErr: '',
	myList: [],
	nextPokemonListUrl: ''
}, action) {
	switch (action.type) {
		case 'POKEMON_FETCH_SUCCESS': {
			return {
				...state,
				pokemonList: action.payload,
			}
		}
		case 'NEXT_POKEMON_FETCH_SUCCESS': {
			let list = state.pokemonList.slice();
			let newList = list.concat(action.payload);
			return {
				...state,
				pokemonList: newList
			}
		}
		case 'POKEMON_FETCH_ERROR': {
			return {
				...state,
				pokemonListErr: action.error,
			}
		}
		case 'SET_NEXT_FETCH_URL': {
			return {
				...state,
				nextPokemonListUrl: action.payload
			}
		}
		case 'SINGLE_POKEMON_FETCH_SUCCESS': {
			return {
				...state,
				singlePokemonData: action.payload,
			}
		}
		case 'SINGLE_POKEMON_FETCH_ERROR': {
			return {
				...state,
				singlePokemonDataErr: action.error,
			}
		}
		case 'CLEAR_SINGLE_POKEMON_DATA': {
			return {
				...state,
				singlePokemonData: null,
				singlePokemonDataErr: ''
			}
		}
		case 'ADD_TO_MYLIST': {
			const newList = state.myList.slice();
			newList.push(action.payload);
			localStorage.setItem('myList', JSON.stringify(newList));
			return {
				...state,
				myList: newList
			}
		}
		case 'REMOVE_FROM_MYLIST': {
			const index = state.myList.indexOf(action.payload);
			let newArray = state.myList.slice();
			newArray.splice(index, 1);
			localStorage.setItem('myList', JSON.stringify(newArray))
			return {
				...state,
				myList: newArray
			}
		}
		case 'POPULATE_MY_LIST': {
			return {
				...state,
				myList: JSON.parse(action.payload)
			}
		}
	}
	return state;
}
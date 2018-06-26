export default function pokemon(state = {
	pokemonList: [],
	singlePokemonData: null,
	pokemonListErr: '',
	singlePokemonDataErr: '',
	myList: []
}, action) {
	switch (action.type) {
		case 'POKEMON_FETCH_SUCCESS': {
			return {
				...state,
				pokemonList: action.data.results,
			}
		}
		case 'POKEMON_FETCH_ERROR': {
			return {
				...state,
				pokemonListErr: action.error,
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
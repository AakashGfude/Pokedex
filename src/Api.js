import axios from 'axios';

function fetchAllPokemonLists() {
	return axios.get('https://pokeapi.co/api/v2/pokemon')
		.then((response) => {
			return response.data;
		})
}

function fetchPokemonThroughUrl(url) {
	return axios.get(url)
		.then((response) => {
			return response.data
		})
}

export default {
	fetchAllPokemonLists,
	fetchPokemonThroughUrl
}
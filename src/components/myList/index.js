import React, { Component } from "react";
import { connect } from 'react-redux';
import { Typography } from "@material-ui/core";

import ListContainer from '../common/listContainer';

class MyList extends Component {
	componentWillUnmount() {
		this.props.clearDesc()
	}
	render() {
		const { classes } = this.props;
		return (
			<section className={classes.mT15vh}>
				<Typography variant="display3" gutterBottom>My List</Typography>
				<ListContainer pokemonDesc={this.props.pokemonDesc} pokemonList={this.props.pokemonList} />
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		pokemonList: state.pokemonReducer.myList,
		pokemonDesc: state.pokemonReducer.singlePokemonData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		clearDesc: () => {
			dispatch({ type: 'CLEAR_SINGLE_POKEMON_DATA' })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)
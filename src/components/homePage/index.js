import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

import ListContainer from '../common/listContainer';
import Filter from '../Filter/filter';
import SearchFilter from '../Filter/searchFilter';
import { Typography } from "@material-ui/core";

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: { title: '' },
			pokemonList: [],
			firstRender: false
		}
		this.updateFilter = this.updateFilter.bind(this);
	}
	componentDidMount() {

		// calling API only when API has not been called
		if (!this.props.pokemonList.length) {
			this.props.getPokemonList();
		} else {
			this.setState({
				pokemonList: this.props.pokemonList,
				firstRender: true
			})
		}
	}
	updateFilter(obj) {
		let filteredList = [];
		const filterObj = Object.assign({}, this.state.filters, obj);
		filteredList = this.filterWithTitle(filterObj.title, this.props.pokemonList);
		this.setState({
			pokemonList: filteredList
		})
	}
	componentDidUpdate() {
		if (!this.state.firstRender) {
			this.setState({
				pokemonList: this.props.pokemonList,
				firstRender: true
			})
		}
	}
	filterWithTitle(title, list) {
		if (title) {
			return list.filter((item) => {
				return item.name.indexOf(title) > -1
			})
		} else {
			return list
		}
	}
	componentWillUnmount() {
		this.props.clearDesc()
	}
	render() {
		const { classes } = this.props;
		return (
			<section className={classes.mT15vh}>
				<Typography variant="display2" gutterBottom>List of All Pokemon</Typography>
				<Filter>
					<SearchFilter onChange={this.updateFilter} />
				</Filter>
				<ListContainer pokemonDesc={this.props.pokemonDesc} handleLoading={this.handleLoading} pokemonList={this.state.pokemonList} />
			</section>
		)
	}
}

function mapStateToProps(state) {
	return {
		pokemonList: state.pokemonReducer.pokemonList,
		pokemonDesc: state.pokemonReducer.singlePokemonData,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getPokemonList: () => {
			dispatch({ type: 'FETCH_POKEMON' })
		},
		clearDesc: () => {
			dispatch({ type: 'CLEAR_SINGLE_POKEMON_DATA' })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
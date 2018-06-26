import React, { Component, Fragment } from "react";

import PokeMonList from './pokemonList';
import PokemonModal from './pokemonModal';

class ListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openModal: false,
			pokemonDesc: null
		}
		this.closeModal = this.closeModal.bind(this);
	}
	static getDerivedStateFromProps(props, state) {
		if (props.pokemonDesc !== state.pokemonDesc) {
			return {
				openModal: true,
				pokemonDesc: props.pokemonDesc
			}
		}
		return null;
	}
	closeModal() {
		this.setState({
			openModal: false
		})
	}
	render() {
		return (
			<Fragment>
				<PokeMonList list={this.props.pokemonList} handleLoading={this.props.handleLoading}/>
				{this.state.pokemonDesc && <PokemonModal open={this.state.openModal} handleClose={this.closeModal} desc={this.state.pokemonDesc}/>}
			</Fragment>
		)
	}
}

export default ListContainer
import React, { PureComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

class PokemonCard extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showInfo: false
		}
	}
	openInfo = (item) => (e) => {
		this.props.fetchSinglePokemon(item.url)
		this.setState({
			showInfo: true
		})
	}
	addToList = (item) => (e) => {
		this.props.addPokemonToList(item);
	}
	removeFromList = (item) => (e) => {
		this.props.removePokemonFromList(item);
	}
	containsObject(obj, list) {
		return list.some(elem => elem.name == obj.name)
	}
	render() {
		const { item, myList } = this.props
		return (
			<Grid item xs={12} sm={3} lg={2}>
				<Card>
					<CardContent>
						<Typography gutterBottom variant="headline" component="h2">
							{item.name}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary" onClick={this.openInfo(item)}>
							Learn More
					</Button>
						{this.containsObject(item, myList) ? <Button size="small" color="primary" onClick={this.removeFromList(item)}>Remove From List</Button> : <Button size="small" color="primary" onClick={this.addToList(item)}>Add To List</Button>}
					</CardActions>
				</Card>
			</Grid>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchSinglePokemon: (url) => {
			dispatch({ type: 'FETCH_SINGLE_POKEMON', payload: url })
		},
		addPokemonToList: (item) => {
			dispatch({ type: 'ADD_TO_MYLIST', payload: item })
		},
		removePokemonFromList: (item) => {
			dispatch({ type: 'REMOVE_FROM_MYLIST', payload: item })
		}
	}
}

function mapStateToProps(state) {
	return {
		myList: state.pokemonReducer.myList
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard)
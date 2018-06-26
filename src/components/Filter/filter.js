import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core';

import SearchFilter from './searchFilter';

const Styles = theme => ({
	searchField: {
		width: '90%'
	}
})

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: ''
		}
		//this.onSearchChange = this.onSearchChange.bind(this);
	}
	onChange() {
		console.log('on Change--');
	}
	render() {
		const { onChange } = this.props
		return (
			<section>
				{this.props.children}
			</section>
		)
	}
}

export default withStyles(Styles)(Filter)
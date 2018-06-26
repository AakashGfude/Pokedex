import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core';

const Styles = theme => ({
	searchField: {
		width: '90%'
	}
})

class SearchFilter extends PureComponent {
	constructor(props) {
		super(props);
		this.onSearchChange = this.onSearchChange.bind(this);
	}
	onSearchChange(e) {
		this.props.onChange({ title: e.target.value});
	}
	render() {
		const { classes } = this.props;
		return (
			<TextField
				className={classes.searchField}
				id="input-with-icon-textfield"
				placeholder="Search For Pokemon"
				onChange={this.onSearchChange}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				}}
			/>
		)
	}
}

export default withStyles(Styles)(SearchFilter)
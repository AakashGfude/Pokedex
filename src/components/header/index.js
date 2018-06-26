import React, { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Drawer from './drawer';
import PokedexImage from '../../images/Pokedex.png';

const drawerWidth = 240;

const Styles = (theme) => ({
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	drawerPaper: {
		position: 'absolute',
		width: drawerWidth,
	},
	appLogo: {
		height: '60px'
	},
	appBar: {
		backgroundColor: '#3d6f94',
		position: 'fixed',
		top: '0px'
	}
})

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openDrawer: false
		}
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
	}
	handleDrawerClose() {
		this.setState({
			openDrawer: false
		})
	}
	handleDrawerOpen() {
		this.setState({
			openDrawer: true
		})
	}
	render() {
		const { classes, theme } = this.props
		return (
			<Fragment>
				<AppBar position="static" className={classes.appBar}>
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}>
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit" >
							<img src={PokedexImage} className={classes.appLogo} alt="logo" />
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer classes={classes} theme={theme} open={this.state.openDrawer} handleDrawerClose={this.handleDrawerClose} />
			</Fragment>
		)
	}
}

export default withStyles(Styles, { withTheme: true })(HeaderComponent);
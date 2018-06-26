import React, { PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import PokemonCard from './pokemonCard';

const styles = theme => ({
  root: {
		flexGrow: 1,
		padding: 20
	},
})
class PokeMonList extends PureComponent {
  constructor(props) {
		super(props);
	}
	render() {
		const { classes } = this.props
		return(
			<Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
            { this.props.list.map((item) => {
							return (
							<Grid item xs={12} sm={3} lg={2} key={item.name}>
								<PokemonCard item={item}/>
							</Grid>
							)
						})}
          </Grid>
        </Grid>
			</Grid>
		)
	}
}

export default withStyles(styles)(PokeMonList)
import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowBack from '@material-ui/icons/ArrowBack';

const modalSize = window.screen.availWidth < 640 ? {'width': '100%', 'height': '100%'}: {}

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 80,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		...modalSize
	},
	chip: {
		margin: theme.spacing.unit,
		borderRadius: '10%',
		backgroundColor: '#d1807c',
		color: 'white',
		fontSize: '22px',
		margin: '20px'
	},
	modalHeading: {
		margin: '0 auto',
		color: '#fff',
		textAlign: 'center',
		padding: '15px',
		fontSize: '24px',
		backgroundColor: '#3c94b8',
	},
	headingText: {
		fontSize: '24px',
		color: '#fff'
	},
	tac: {
		textAlign: 'center'
	},
	img: {
		height: '200px'
	},
	centerAlignAbs: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)'
	},
	rel: {
		position: 'relative'
	},
	arrowBack: {
		position: 'absolute',
    left: '5%'
	}
});

class PokemonModal extends Component {
	render() {
		const { classes, desc } = this.props;
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.props.open}
				onClose={this.props.handleClose}
				className={classes.modal}
			>
				<div className={classes.paper}>
					<div className={classes.modalHeading}>
						<ArrowBack className={classes.arrowBack} onClick={this.props.handleClose}/>
						<Typography variant="title" id="modal-title" className={classes.headingText}>
							{desc.name}
						</Typography>
					</div>
					<div className={classes.tac}>
						{desc.types.map((item) => {
							return <Chip
								label={item.type.name}
								key={item.slot}
								className={classes.chip}
							/>
						})}
					</div>
					<Grid container>
						<Grid item xs={6} md={6} className={classes.tac}>
							<img src={desc.sprites.front_default} className={classes.img} />
						</Grid>
						<Grid item xs={6} md={6} className={classes.rel}>
							<div className={classes.centerAlignAbs}>
								<Typography>Weight: {desc.weight}</Typography>
								<Typography>Height: {desc.height}</Typography>
								<Typography>Base Experience: {desc.base_experience}</Typography>
							</div>
						</Grid>
					</Grid>
				</div>
			</Modal>
		)
	}
}

export default withStyles(styles)(PokemonModal);
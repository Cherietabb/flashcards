import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ReactCardFlip from 'react-card-flip';
// import fetch from 'isomorphic-fetch';
// import data from './data.json';

const contentStyles = {
	root: {
		marginTop: '90px',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '60%',
		justifyContent: 'center'
	},
	paper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		minHeight: 300,
		minWidth: 450,
		margin: 20
	},
};

class CardFlip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
			data: null
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			isFlipped: !this.state.isFlipped,
		});
	}

	// componentWillMount() {
	// 	fetch('./data.json')
	// 		.then(res => {
	// 			this.setState({
	// 				data: res.json()
	// 			})
	// 		})
	// }


	render() {
		// const {data} = this.state;
		return (
			<div style={contentStyles.root}>
				<ReactCardFlip
					isFlipped={this.state.isFlipped}
					flipSpeedBackToFront={1.0}
					flipSpeedFrontToBack={1.0}
				>
					<div
						key="front"
						onClick={this.handleClick}
					>
						<Paper
							style={contentStyles.paper}
						>
						</Paper>
					</div>
					<div
						key="back"
						onClick={this.handleClick}
					>
						<Paper
							style={contentStyles.paper}
						>
						</Paper>
					</div>
				</ReactCardFlip>
			</div>
		)
	}
}


export default CardFlip;

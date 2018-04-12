import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import ReactCardFlip from 'react-card-flip';
import data from './data.json';

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
		justifyContent: 'center',
		minHeight: 220,
		minWidth: 450,
		margin: 20
	},
	span: {
		padding: '10px',
		fontSize: '21pt'
	}
};

class CardFlip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			isFlipped: !this.state.isFlipped
		});
	}

	componentWillMount() {
		this.setState({
			id: data[0].id,
			definition: data[0].definition,
			term: data[0].term,
			isFlipped: false
		})
	}


	render() {
		return (
			<div style={contentStyles.root}>
				<ReactCardFlip
					isFlipped={this.state.isFlipped}
					flipSpeedBackToFront={1.5}
					flipSpeedFrontToBack={1.5}
				>
					<div
						key="front"
						onClick={this.handleClick}
					>
						<Paper
							style={contentStyles.paper}
							zDepth={4}
						>

							<span style={contentStyles.span}
							>{this.state.definition}</span>

						</Paper>
					</div>
					<div
						key="back"
						onClick={this.handleClick}
					>
						<Paper
							style={contentStyles.paper}
							zDepth={4}
						>
							<div style={contentStyles.span}
							>{this.state.term}</div>
						</Paper>
					</div>
				</ReactCardFlip>
			</div>
		)
	}
}


export default CardFlip;

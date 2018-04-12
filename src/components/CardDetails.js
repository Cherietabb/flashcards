import React, { Component } from 'react';

class CardDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: '',
			definition: '',
			term: ''
		}
	}
	render() {
		return (
			<div>
				<span>{this.state.definition}</span>
			</div>
		)
	}
}
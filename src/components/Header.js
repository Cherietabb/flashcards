import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

const contentStyle = (props) => ({
	appBar: {
		position: 'fixed',
		left: 0,
		top: 0,
		backgroundColor: this.props.muiTheme.palette.primary1Color
	}
});

class Header extends Component {
	render() {
		return(
			<div>
				<AppBar
					style={contentStyle.appBar}
					title="Flash Cards"
				/>
			</div>
		)
	}
}

export default muiThemeable()(Header);
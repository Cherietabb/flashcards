import React, { Component } from 'react';
import '../app.css';
import CardContainer from './CardContainer';
import Header from './Header';
import { MuiThemeProvider  } from 'material-ui/styles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo900, indigo200, pink500, red500 } from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
	palette: {
		primary1Color: indigo900,
		primary2Color: indigo200,
		secondaryColor: pink500,
		error: red500,
		contrastThreshold: 3,
		tonalOffset: 0.2
	},
	paper: {
		backgroundColor: indigo200
	}
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
	      <div>
		      <Header/>
		      <CardContainer />
	      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

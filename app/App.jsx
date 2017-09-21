import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Blank from './Blank.jsx';
import ConnectionStatusHoC from './ConnectionStatusHoC.jsx';

import client from './Client.js';

const ConnectedBlank = ConnectionStatusHoC(Blank);

class Container extends Component {
  render() {
    client.connect();
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="container">
          <ConnectedBlank />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('content'));

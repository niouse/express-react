import React, { Component } from 'react';

import client from './Client.js';

export default Wrapped => {
  return class ConnectedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        connected: client.isConnected(),
        userId: client.getUserId(),
      };
    }

    componentDidMount() {
      client.onConnectionEstablished(() => {
        this.setState({
          connected: true,
          userId: client.getUserId(),
        });
      });
      client.onConnectionClosed(() => {
        this.setState({
          connected: false,
          userId: client.getUserId(),
        });
      });
    }

    render() {
      return (
        <Wrapped connected={this.state.connected} userId={this.state.userId} />
      );
    }
  };
};

import React, { Component } from 'react';
import { services } from 'zetapush-js';

import client from './Client.js';

export default Wrapped => {
  return class ConnectedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        connected: client.isConnected(),
        userId: client.getUserId(),
        temperature: 'pending',
      };
      this.api = client.createService({
        Type: services.Macro,
        listener: {
          getCurrentRigoleTemperature: result => {
            this.setState({
              temperature: result.data.result.temperature,
            });
          },
          pushRigoleTemperature: result => {
            this.setState({
              temperature: result.data.result.temperature,
            });
          },
          addUserToAlertGroup: result => {
            console.log('addUserToAlertGroup', result);
          },
          completed: result => {
            console.warn('completed', result);
          },
          error: result => {
            console.error('error', result);
          },
        },
      });
    }

    componentDidMount() {
      client.onConnectionEstablished(() => {
        this.api.call({
          name: 'addUserToAlertGroup',
          parameters: {
            userId: client.getUserId(),
          },
        });
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
        <Wrapped
          api={this.api}
          connected={this.state.connected}
          userId={this.state.userId}
          temperature={this.state.temperature}
        />
      );
    }
  };
};

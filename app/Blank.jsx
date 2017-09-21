import React, { Component } from 'react';

export default class Blank extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {}

  onClick() {
    console.log('getCurrentRigoleTemperature click');
    this.props.api.call({
      name: 'getCurrentRigoleTemperature',
    });
  }

  render() {
    return (
      <div>
        <h1>
          Blank component{' '}
          {this.props.connected ? 'connected' : ' not connected'}
        </h1>
        <div>{this.props.userId}</div>
        <div>{this.props.temperature}</div>
        <button onClick={() => this.onClick()}>
          getCurrentRigoleTemperature
        </button>
      </div>
    );
  }
}

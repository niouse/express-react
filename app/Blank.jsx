import React, { Component } from 'react';

export default class Blank extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillReceiveProps(newProps) {}

  test() {
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <h1>
          Blank component{' '}
          {this.props.connected ? 'connected' : ' not connected'}
        </h1>
        <div>{this.props.userId}</div>
      </div>
    );
  }
}

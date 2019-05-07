import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <span id={this.props.id}>
        {this.props.name}
      </span>
    )
  }
}

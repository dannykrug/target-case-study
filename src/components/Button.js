import React, { Component } from 'react';
import '../css/button.css'

export default class Button extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

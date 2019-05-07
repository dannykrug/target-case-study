import React, { Component } from 'react';
import '../css/button.css'

export default class Button extends Component {
  render() {
    return (
      <div className={this.props.className} id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

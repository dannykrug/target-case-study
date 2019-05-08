import React, { Component } from 'react';
import '../css/button.css'

export default class Button extends Component {

  render() {
    console.log(this.props);
    return (
      <div className={this.props.className} id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

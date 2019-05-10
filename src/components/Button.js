import React, { Component } from 'react';
import '../css/button.css'

export default class Button extends Component {

  render() {

    let clickHandler = () => {
      window.alert(this.props.message)
    }

    return (
      <div onClick={clickHandler}  className={this.props.className} id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

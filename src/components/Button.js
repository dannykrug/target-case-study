import React, { Component } from 'react';
import { useAlert } from 'react-alert';
import '../css/button.css'

export default class Button extends Component {

  render() {

    // const alert = useAlert()
    //
    // let seeAlert = (e) => {
    //   e.preventDefault()
    //   alert.show("added!")
    // }

    return (
      <div  className={this.props.className} id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

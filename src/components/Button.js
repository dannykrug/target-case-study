import React, { Component } from 'react';
import '../css/button.css'

export default class Button extends Component {

  render() {

    // const renderButton = () => {
    //   let atc = document.getElementById('atc')
    //   let pickup = document.getElementById('pickup')
    //   if(this.props.purchasingChannelCode === 1) {
    //     pickup.className = "hidden"
    //     atc.className = "button atc"
    //   } else if(this.props.purchasingChannelCode === 2) {
    //     atc.className = "hidden"
    //     pickup.className = "button pickup"
    //   } else {
    //     atc.className = "button atc"
    //     pickup.className = "button pickup"
    //   }
    // }
    console.log(this.props);
    return (
      <div className={this.props.className} id={this.props.id}>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

import React, { Component } from 'react';
import Button from './Button';
import '../css/button.css'

export default class ATCContainer extends Component {

  render() {

    let code = this.props.code

    // function buttonRender(code)  {
    //   let atc = document.getElementById('atc')
    //   let pickup = document.getElementById('pickup')
    //   if(code === 1) {
    //     pickup.className = "hidden"
    //   } else if(code === 2) {
    //     atc.className = "hidden"
    //   }
    // }

    // buttonRender(code)

    console.log(this.props.code);
    return(
      <div className="atc-box" id="buttonContainer">
        <Button className="button" id="pickup" name="PICK UP IN STORE" />
        <Button className="button" id="atc" name="ADD TO CART" />
      </div>
    )
  }
}

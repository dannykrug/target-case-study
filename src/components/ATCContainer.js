import React, { Component } from 'react';
import Button from './Button';
import '../css/button.css'

export default class ATCContainer extends Component {

  render() {


    console.log(this.props.code);
    return(
      <div className="atc-box" id="buttonContainer">
        <Button className="button" id="pickup" name="PICK UP IN STORE" />
        <Button className="button" id="atc" name="ADD TO CART" />
      </div>
    )
  }
}

import React, { Component } from 'react';
import Button from './Button';
import '../css/button.css'

export default class ATCContainer extends Component {

  render() {
    console.log(this.props);
    return(
      <div className="atc-box">
        <Button className="button pickup" id="pickup" name="PICK UP IN STORE" />
        <Button className="button atc" id="atc" name="ADD TO CART" />
      </div>
    )
  }
}

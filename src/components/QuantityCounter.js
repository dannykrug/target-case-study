import React, { Component } from 'react';
import '../css/quantity.css'

export default class QuantityCounter extends Component {

  state = { count: 1 }

  render() {
    const addQuantity = (e) => {
      e.preventDefault()
      let newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }

    const lowerQuantity = (e) => {
      let newCount = this.state.count - 1
      if(newCount <= 0) {
        this.setState({
          count: 1
        })
      } else {
        this.setState({
          count: newCount
        })
      }
    }

    console.log(this.state);
    return (
      <div className="quantity">
        <span className="quantity-text">quantity:</span> <span className="quantity-adjust"><span className="quantity-button" onClick={lowerQuantity} id="minus">-</span>
        <span className="quantity-number">{this.state.count}</span> <span className="quantity-button" onClick={addQuantity} id="plus">+</span></span>
      </div>
    )
  }
}

import React, { Component } from 'react';

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
      <div>
        Quantity <span onClick={lowerQuantity} id="minus">-</span> {this.state.count} <span onClick={addQuantity} id="plus">+</span>
      </div>
    )
  }
}

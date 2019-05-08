import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import '../css/quantity.css'

library.add(faPlusCircle, faMinusCircle)

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

    return (
      <div className="quantity">
        <span className="quantity-text">quantity:</span> <span className="quantity-adjust"><span className="quantity-button" onClick={lowerQuantity} id="minus"><FontAwesomeIcon icon="minus-circle" /></span>
        <span className="quantity-number">{this.state.count}</span> <span className="quantity-button" onClick={addQuantity} id="plus"><FontAwesomeIcon icon="plus-circle" /></span></span>
      </div>
    )
  }
}

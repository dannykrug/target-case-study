import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTag)

export default class Promotion extends Component {
  render(){
    return (
      <div className="promo-text">
      <span><FontAwesomeIcon icon="tag" /></span>   {this.props.promotion.Description[0].shortDescription}
      </div>
    )
  }
}

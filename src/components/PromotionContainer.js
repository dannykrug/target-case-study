import React, { Component } from 'react';
import Promotion from './Promotion'
import '../css/promo.css'

export default class PromotionContainer extends Component {
  render(){

    let promotions = this.props.promotions.map(promotion => <Promotion promotion={promotion} />)

    return (
      <div>
      <div className="promo-divider" />
      {promotions}
      <div className="promo-divider" />
      </div>
    )
  }
}

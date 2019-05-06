import React, { Component } from 'react';
import Promotion from './Promotion'

export default class PromotionContainer extends Component {
  render(){
    
    let promotions = this.props.promotions.map(promotion => <Promotion promotion={promotion} />)

    return (
      <div>
      {promotions}
      </div>
    )
  }
}

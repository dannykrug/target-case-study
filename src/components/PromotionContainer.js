import React from 'react';
import Promotion from './Promotion'
import '../css/promo.css'

 const PromotionContainer = (props) => {

    let promotions = props.promotions.map(promotion => <Promotion promotion={promotion} />)

    return (
      <div>
      <div className="promo-divider" />
      {promotions}
      <div className="promo-divider" />
      </div>
    )
  }


export default PromotionContainer

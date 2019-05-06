import React, { Component } from 'react';
import HighlightsContainer from './HighlightsContainer'
import PromotionContainer from './PromotionContainer'

export default class ProductContainer extends Component {
  render() {

    let product=this.props.product
    
    return (
      <div>
      <h1>{product.title}</h1>
      <h2>{product.Offers[0].OfferPrice[0].formattedPriceValue}</h2>
      <p>{product.Offers[0].OfferPrice[0].priceQualifier}</p>
      <PromotionContainer promotions={product.Promotions} />
      <h3>returns</h3>
      <p>This item must be returned within {product.ReturnPolicy[0].ReturnPolicyDetails[0].policyDays} days. {product.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage}.</p>
      <h1>product highlights</h1>
      <HighlightsContainer highlights={product.ItemDescription[0].features}/>
      </div>
    )
  }
}

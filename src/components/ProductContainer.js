import React, { Component } from 'react';

export default class ProductContainer extends Component {
  render() {

    let product=this.props.product

    console.log(product.Offers[0].OfferPrice[0].formattedPriceValue);

    return (
      <div>
      <h1>{product.title}</h1>
      <h2>{product.Offers[0].OfferPrice[0].formattedPriceValue}</h2>
      <p>{product.Offers[0].OfferPrice[0].priceQualifier}</p>
      <h3>returns</h3>
      <p>This item must be returned within {product.ReturnPolicy[0].ReturnPolicyDetails[0].policyDays} days. {product.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage}.</p>
      <h1>product highlights</h1>
      </div>
    )
  }
}

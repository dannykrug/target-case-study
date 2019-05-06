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
      </div>
    )
  }
}

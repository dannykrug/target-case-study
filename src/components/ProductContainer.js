import React, { Component } from 'react';
import HighlightsContainer from './HighlightsContainer'
import PromotionContainer from './PromotionContainer'
import PhotoCarousel from './PhotoCarousel'
import ReviewContainer from './ReviewContainer'
import QuantityCounter from './QuantityCounter'
import Button from './Button'
import '../App.css'

export default class ProductContainer extends Component {
  render() {

    let product=this.props.product

    return (
      <div className="main">
        <div className="split left">
          <h1 className="title">{product.title}</h1>
          <div className="photo-carousel">
          <PhotoCarousel items={product.Images[0]}/>
          </div>
          <ReviewContainer reviews={product.CustomerReview[0]} />
        </div>
        <div className="split right">
          <h2>{product.Offers[0].OfferPrice[0].formattedPriceValue}</h2>
          <p>{product.Offers[0].OfferPrice[0].priceQualifier}</p>
          <PromotionContainer promotions={product.Promotions} />
          <QuantityCounter />
        <div className="atc-box">
          <Button className="button pickup" id="pickup" name="PICK UP IN STORE" />
          <Button className="button atc" id="atc" name="ADD TO CART" />
        </div>
          <h3>returns</h3>
          <p>This item must be returned within {product.ReturnPolicy[0].ReturnPolicyDetails[0].policyDays} days. {product.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage}.</p>
          <div className="add-share-box">
            <Button className="add-share" id="registry" name="ADD TO REGISTRY" />
            <Button className="add-share" id="list"  name="ADD TO LIST" />
            <Button className="add-share" id="share" name="SHARE" />
          </div>
          <h1>product highlights</h1>
          <HighlightsContainer highlights={product.ItemDescription[0].features}/>
          </div>
      </div>
    )
  }
}

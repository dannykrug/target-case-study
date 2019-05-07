import React, { Component } from 'react';
import HighlightsContainer from './HighlightsContainer'
import PromotionContainer from './PromotionContainer'
import PhotoCarousel from './PhotoCarousel'
import ReviewContainer from './ReviewContainer'
import QuantityCounter from './QuantityCounter'
import Button from './Button'
import ListShareButton from './ListShareButton'
import '../App.css'

export default class ProductContainer extends Component {
  render() {

    let product=this.props.product

    return (
      <div>
        <div className="split left">
          <h1>{product.title}</h1>
          <PhotoCarousel items={product.Images[0]}/>
          <ReviewContainer reviews={product.CustomerReview[0]} />
        </div>
        <div className="split right">
          <h2>{product.Offers[0].OfferPrice[0].formattedPriceValue}</h2>
          <p>{product.Offers[0].OfferPrice[0].priceQualifier}</p>
          <PromotionContainer promotions={product.Promotions} />
          <QuantityCounter />
          <Button id="pickup" name="Pickup In Store" />
          <Button id="atc" name="Add to Cart" />
          <h3>returns</h3>
          <p>This item must be returned within {product.ReturnPolicy[0].ReturnPolicyDetails[0].policyDays} days. {product.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage}.</p>
          <ListShareButton name="ADD TO REGISTRY" />
          <ListShareButton name="ADD TO LIST" />
          <ListShareButton name="SHARE" />
          <h1>product highlights</h1>
          <HighlightsContainer highlights={product.ItemDescription[0].features}/>
          </div>
      </div>
    )
  }
}

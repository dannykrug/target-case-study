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
    let product = this.props.product.product
    let buttonStyle = this.props.product

    return (
      <div className="main">
        <div className="left">
          <h1 className="title">{product.title}</h1>
          <div className="photo-carousel">
          <PhotoCarousel items={product.Images[0]}/>
          </div>
          <div className="desktop-review-container">
            <ReviewContainer reviews={product.CustomerReview[0]} />
          </div>
        </div>
        <div className="right">
          <div className="price-box">
            <span className="price">{product.Offers[0].OfferPrice[0].formattedPriceValue}</span>
            <span className="qualifier">{product.Offers[0].OfferPrice[0].priceQualifier}</span>
          </div>
            <PromotionContainer promotions={product.Promotions} />
          <div className="quantity-box">
            <QuantityCounter />
          </div>

          <div className="atc-box" id="buttonContainer">
            <Button code={product.purchasingChannelCode} className={buttonStyle.pickup} id="pickup" name="PICK UP IN STORE" />
            <Button code={product.purchasingChannelCode} className={buttonStyle.atc} id="atc" name="ADD TO CART" />
          </div>

          <div className="return-box">
            <h3>returns</h3>
            <div className="return-divider" />
            <p className="return-text">This item must be returned within {product.ReturnPolicy[0].ReturnPolicyDetails[0].policyDays} days. {product.ReturnPolicy[0].ReturnPolicyDetails[0].guestMessage}.</p>
          </div>
            <div className="add-share-box">
              <Button className="add-share" id="registry" name="ADD TO REGISTRY" />
              <Button className="add-share" id="list"  name="ADD TO LIST" />
              <Button className="add-share" id="share" name="SHARE" />
            </div>
            <h1>product highlights</h1>
            <HighlightsContainer highlights={product.ItemDescription[0].features}/>
            </div>
            <div className="mobile-review-container">
              <ReviewContainer reviews={product.CustomerReview[0]} />
            </div>
      </div>
    )
  }
}

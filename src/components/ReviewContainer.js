import React, { Component } from 'react';
import Review from './Review';
import StarRating from './StarRating';
import '../css/review.css'

export default class ReviewContainer extends Component {
  render() {

    let reviews = this.props.reviews

    return (
      <div className="review-box">
        <div className="review-topper">
          <StarRating name={reviews.consolidatedOverallRating} value={reviews.consolidatedOverallRating}/> <span>overall</span> <span><p>view all {reviews.totalReviews} reviews</p></span>
        </div>
        <div className="pro-con-box">
          <div className="pro-con-topper">
            <span><h2>PRO</h2><p>most helpful 4-5 star review</p></span> <span><h2>CON</h2><p>most helpful 1-2 star review</p></span>
          </div>
          <div className="review-divider" />
          <div className="pro-con-content">
            <Review className="pro-con-item" review={reviews.Pro[0]} />
            <Review className="pro-con-item" review={reviews.Con[0]} />
          </div>
        </div>
      </div>
    )
  }
}

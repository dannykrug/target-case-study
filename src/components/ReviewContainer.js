import React from 'react';
import Review from './Review';
import StarRating from './StarRating';
import '../css/review.css'

const ReviewContainer = (props) => {

    let reviews = props.reviews

    return (
      <div className="review-box">
        <div className="review-topper">
          <div className="overall-rating"><StarRating name={reviews.consolidatedOverallRating} value={reviews.consolidatedOverallRating}/> <span>overall</span></div>
          <span className="view-all">view all {reviews.totalReviews} reviews</span>
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

export default ReviewContainer

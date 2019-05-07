import React, { Component } from 'react';
import Review from './Review'

export default class ReviewContainer extends Component {
  render() {

    let reviews = this.props.reviews

    return (
      <div>
      <span><p>{reviews.consolidatedOverallRating} overall</p></span> <span><p>view all {reviews.totalReviews} reviews</p></span>
      <span><h2>PRO</h2><p>most helpful 4-5 star review</p></span> <span><h2>CON</h2><p>most helpful 1-2 star review</p></span>
      <Review review={reviews.Pro[0]} />
      <Review review={reviews.Con[0]} />
      </div>
    )
  }
}

import React, { Component } from 'react';
import StarRating from './StarRating'

export default class Review extends Component {
  render() {
    console.log(this.props);
    let review = this.props.review
    return(
      <div className={this.props.className}>
      <p><StarRating name={review.overallRating} value={review.overallRating}/></p>
      <h3>{review.title}</h3>
      <p>{review.review}</p>
      <p>{review.screenName} {review.datePosted}</p>
      </div>
    )
  }
}

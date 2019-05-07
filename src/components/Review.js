import React, { Component } from 'react';

export default class Review extends Component {
  render() {
    let review = this.props.review
    return(
      <div>
      <p>{review.overallRating}</p>
      <h3>{review.title}</h3>
      <p>{review.review}</p>
      <p>{review.screenName} {review.datePosted}</p>
      </div>
    )
  }
}

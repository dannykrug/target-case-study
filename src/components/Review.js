import React, { Component } from 'react';
import StarRating from './StarRating'
import Moment from 'react-moment';
import '../css/review.css'

export default class Review extends Component {
  render() {
    let review = this.props.review
    return(
      <div className={this.props.className}>
      <p><StarRating name={review.overallRating} value={review.overallRating}/></p>
      <h3>{review.title}</h3>
      <p>{review.review}</p>
      <p><span class="reviewer-name">{review.screenName}</span> <span><Moment format="MM/DD/YYYY">{review.datePosted}</Moment></span></p>
      </div>
    )
  }
}

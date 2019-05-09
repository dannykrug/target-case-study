import React from 'react';
import StarRating from './StarRating'
import Moment from 'react-moment';
import '../css/review.css'

 const Review = (props) => {
    let review = props.review
    return(
      <div className={props.className}>
      <StarRating name={review.overallRating} value={review.overallRating}/>
      <h3>{review.title}</h3>
      <p>{review.review}</p>
      <p><span className="reviewer-name">{review.screenName}</span> <span><Moment format="MM/DD/YYYY">{review.datePosted}</Moment></span></p>
      </div>
    )
  }

export default Review

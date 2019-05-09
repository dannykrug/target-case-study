import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = (props) => {
  return (
      <StarRatingComponent
        name={props.name}
        editing={false}
        starCount={5}
        value={Number(props.value)}
        starColor={"#E80018"}
        emptyStarColor={"grey"}
       />
  )
}

export default StarRating

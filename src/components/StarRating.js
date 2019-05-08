import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const StarRating = (props) => {
  return (
    <div>
      <StarRatingComponent
        name={props.name}
        editing={false}
        starCount={5}
        value={props.value}
        starColor={"#E80018"}
        emptyStarColor={"grey"}
       />
    </div>
  )
}

export default StarRating

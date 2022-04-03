import React from "react";
import Review from "../Review/Review";

const Reviews = (props) => {
  const reviews = props.reviews;
  console.log(reviews)
  return (
    <div className="reviews-area">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reviews.map((feedback) => (
            <Review key={feedback.id} feedback={feedback}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

import React from "react";
import useReviews from '../../hooks/useReviews';
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
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

import React from "react";
import './Review.css';

const Review = ({feedback}) => {
  const {name, img, review, ratings} = feedback;
  console.log(review)
  return (
      
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{review.length > 20 ? review.slice(0,250): review} </p>
              <p className="card-text card-rating fw-bold">Ratings: {ratings} Stars</p>
            </div>
          </div>
        </div>
  );
};

export default Review;

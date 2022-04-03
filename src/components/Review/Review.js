import React from "react";
import './Review.css';

const Review = ({feedback}) => {
    // console.log(feedback)
    const {name, img, review, ratings} = feedback;
  return (
      
        <div className="col">
          <div className="card">
            <img src={img} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{review} </p>
              <p className="card-text fw-bold">Ratings: {ratings} Stars</p>
            </div>
          </div>
        </div>
  );
};

export default Review;

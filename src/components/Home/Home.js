import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Banner from "../Banner/Banner";
import Review from '../Review/Review';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <Banner></Banner>
      <div className="reviews-area">
      <div className="container">
        <div className="sect">
          <h1>Customer Review</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reviews.slice(0,3).map((feedback) => (
            <Review key={feedback.id} feedback={feedback}></Review>
          ))}
        </div>
        <Link to='/reviews'>
        <button 
          className="btn btn-lg btn-primary mx-auto d-block">Show All Reviews
        </button>
      </Link>
      </div>
    </div>
    </div>
  );
};

export default Home;

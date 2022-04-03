import React from "react";
import useReviews from "../../hooks/useReviews";
import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <Banner></Banner>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};

export default Home;

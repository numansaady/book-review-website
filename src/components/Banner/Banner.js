import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="banner-area py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 pe-5">
              <h1 className="display-2 fw-bold">
                Best Selling Book <br /> <span>Of 2021</span>
              </h1>
              <p className="h5 mt-2">
                No matter your goals, Atomic Habits offers a proven framework
                for improving--every day. James Clear, one of the world's
                leading experts on habit formation, reveals practical strategies
                that will teach you exactly how to form good habits, break bad
                ones, and master the tiny behaviors that lead to remarkable
                results.
              </p>
              <button className="btn btn-lg mt-4 btn-secondary">See More</button>
            </div>
            <div className="col-md-5 banner-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/51-uspgqWIL._SX329_BO1,204,203,200_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

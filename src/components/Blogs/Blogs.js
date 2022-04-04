import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <Accordion id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Question #1 : What is Semantic Tags?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Semantic elements: header, main, footer, form, article etc.
              </strong>{" "}
              A semantic element clearly describes its meaning to the browser
              and the developer. Examples of non-semantic elements: div and span
              - Tells nothing about its content. Semantic elements: header,
              main, footer, form, article - Clearly define its content. HTML5
              introduces many semantic elements as mentioned below which make
              the code easier to write and understand for the developer as well
              as instructs the browser on how to treat them.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Question #2 : What is Context api?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Context Api, allows us to pass data through our component trees,
                giving our components the ability to communicate and share data
                at different levels.
              </strong>{" "}
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Question #3 Inline and block level Elements
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Inline Elements and Inline Block Elements.</strong> i.
              Block Level Elements: A block-level element always starts on a new
              line, takes up the full width available. ii. Inline Elements: An
              inline element does not start on a new line, only takes up as much
              width as necessary. iii. Inline element does not support width
              height, padding, etc. iv. But using inline-block support
              width-height, padding, etc.
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Blogs;

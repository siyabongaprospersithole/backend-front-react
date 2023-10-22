/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import Carousel from 'react-bootstrap/Carousel';

// Define the CaseStudiesSection component as a functional component
export const CaseStudiesSection = () => {

  

  return (
    // Render the CaseStudiesSection component's JSX (HTML-like) structure
    <section id="case-studies" className="mt-97">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-tag-rectangle">
            <div className="rectangle-3"></div>
            <h2 className="text-wrapper-6">Case studies</h2>
          </div>
        </div>
      </div>

      <Carousel
 interval={4000}
 pause={false}
 indicators={false}
 controls={false}
 wrap={true}
 slide={true} // Use "slide" prop to display multiple items at a time
 className="custom-carousel mt-77 row" // Custom CSS class
>
        <Carousel.Item  
        style={{ margin: "0 10px" }} 
        className="col"
        >

        <div className="services-item-two mt-35 ">
                <div className="services-thumb-two">
                  <img src="/img/casestudies/1280x960-3.png" alt="Case Study Image 1" />
                  <div className="item-shape">
                    <img src="/img/casestudies/1280x960-3.png" alt="Case Study Image 1" />
                  </div>
                </div>
                <div className="services-content-two">
                  <div className="rectangle-3"></div>
                  <h2 className="title">Finance Planning</h2>
                  <p>The only athlete in the world to do her Olympic routine in 2020.</p>
                </div>
              </div>
        </Carousel.Item>

        <Carousel.Item   
        style={{ margin: "0 10px" }} 
        className="col"
        >
        <div className="services-item-two mt-35">
                <div className="services-thumb-two">
                  <img src="/img/casestudies/1280x960-2.png" alt="Case Study Image 2" />
                  <div className="item-shape">
                    <img src="/img/casestudies/1280x960-2.png" alt="Case Study Image 2" />
                  </div>
                </div>
                <div className="services-content-two">
                  <div className="rectangle-3"></div>
                  <h2 className="title">The Savings Jar</h2>
                  <p>Grow your savings treasure and grow your dragon.</p>
                </div>
              </div>
        </Carousel.Item>


        
        <Carousel.Item  

        style={{ margin: "0 10px" }} 
        className="col"
        >
        <div className="services-item-two mt-35">
                <div className="services-thumb-two">
                  <img src="/img/casestudies/1280x960-1.png" alt="Case Study Image 3" />
                  <div className="item-shape">
                    <img src="/img/casestudies/1280x960-1.png" alt="Case Study Image 3" />
                  </div>
                </div>
                <div className="services-content-two">
                  <div className="rectangle-3"></div>
                  <h2 className="title">Skhokho seMali</h2>
                  <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
                </div>
              </div>
        </Carousel.Item>

      </Carousel>
    </div>
  </section>
  );
};

CaseStudiesSection.propTypes = {
  logo: PropTypes.string,
};


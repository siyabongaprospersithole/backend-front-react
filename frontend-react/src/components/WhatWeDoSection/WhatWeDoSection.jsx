
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const WhatWeDoSection = () => {
  // This component represents the section describing what services are offered.
  return (
    <section id="what-we-do" className="mt-77">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-tag-rectangle">
              <div className="rectangle-3"></div>
              <h2 className="text-wrapper-6">What we do</h2>
            </div>
          </div>
          <div className="col-lg-12 mt-8" style={{ marginTop: '77px' }}>
            <h1>
              We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

WhatWeDoSection.propTypes = {
  logo: PropTypes.string,  // Prop validation for the logo image source.
};

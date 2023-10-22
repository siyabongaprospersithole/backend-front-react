// Import necessary libraries and styles.
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

// Define the FooterSection component.
export const FooterSection = () => {
  return (
    // Render the footer section with contact information and links.
    <section className="footer mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mt-35 mb-35">
            <div className="heading-tag-rectangle">
              <div className="rectangle-3"></div>
              <h2 className="text-wrapper-6">You’ll be in good company</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div>
              <h1>Have a project in mind?</h1>
              <h1>Let's make it happen</h1>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="text-wrapper-6">
              22 Street Name, Suburb, 8000,<br />
              Cape Town, South Africa<br />
              +27 21 431 0001<br />
              enquirie@website.co.za
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="subfooter">
              {/* Render various links and information in the footer. */}
              <div className="footer-item">
                <div>
                  <p>Terms of service</p>
                  <p>Privacy policy</p>
                  <p>Impressum</p>
                </div>
              </div>

              <div className="footer-item">
                <div>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Twitter</p>
                </div>
              </div>

              <div className="footer-item">
                <div>
                  <p>Github</p>
                  <p>Linkedin</p>
                  <p>Teams</p>
                </div>
              </div>

              <div className="footer-item">
                <div>
                  <p>Youtube</p>
                  <p>Behance</p>
                  <p>Dribbble</p>
                </div>
              </div>

              <div className="footer-item">
                <div>
                  <p>Explore open jobs</p>
                  <p>©2000—2023 Company Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define the PropTypes for the FooterSection component.
FooterSection.propTypes = {
  logo: PropTypes.string,
};


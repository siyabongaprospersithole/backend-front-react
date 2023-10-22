// Import necessary dependencies.
import PropTypes from "prop-types"; // For defining prop types.
import React from "react"; // For creating React components.
import "./style.css"; // For styling the component.

// Define the HeroSection component.
export const HeroSection = ({ backgroundUrl = '/img/hero-image.png'}) => {
  // Define the style for the hero section.
  const heroStyle = {
    backgroundImage: `url('../img/hero-image.png')`, // Set the background image.
    backgroundPosition: '50% 50%', // Set the background position.
    backgroundSize: 'auto', // Set the background size.
    height: '600px', // Set the height of the hero section.
    position: 'relative', // Set the position property.
    width: '100%', // Set the width of the hero section.
  };
  
  // Render the HeroSection component.
  return (
    <section id="hero">
      <div className="overlap" style={heroStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-heading-wrapper">
                <h1 className="main-heading mt-2">Live with Confidence</h1> {/* Display the main heading. */}
                <p className="mt-4">
                  José Mourinho brings confidence to pan-African Sanlam campaign.
                </p> {/* Display a description. */}
                <button className="btn btn-custom-purple action-button mt-2" type="button">
                  View project
                </button> {/* Display a button. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define the prop types for the HeroSection component.
HeroSection.propTypes = {
  logo: PropTypes.string, // Prop for the logo image URL.
};

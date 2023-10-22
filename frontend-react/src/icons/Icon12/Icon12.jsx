/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon12 = ({ color = "#70259B", className }) => {
  return (
    <svg
      className={`icon-12 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_154_6207)">
        <path
          className="path"
          d="M9.1665 9.16666V5.83332H10.8332V9.16666H14.1665V10.8333H10.8332V14.1667H9.1665V10.8333H5.83317V9.16666H9.1665ZM9.99984 18.3333C5.39734 18.3333 1.6665 14.6025 1.6665 9.99999C1.6665 5.39749 5.39734 1.66666 9.99984 1.66666C14.6023 1.66666 18.3332 5.39749 18.3332 9.99999C18.3332 14.6025 14.6023 18.3333 9.99984 18.3333ZM9.99984 16.6667C11.7679 16.6667 13.4636 15.9643 14.7139 14.714C15.9641 13.4638 16.6665 11.7681 16.6665 9.99999C16.6665 8.23188 15.9641 6.53619 14.7139 5.28594C13.4636 4.0357 11.7679 3.33332 9.99984 3.33332C8.23173 3.33332 6.53604 4.0357 5.28579 5.28594C4.03555 6.53619 3.33317 8.23188 3.33317 9.99999C3.33317 11.7681 4.03555 13.4638 5.28579 14.714C6.53604 15.9643 8.23173 16.6667 9.99984 16.6667Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_154_6207">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon12.propTypes = {
  color: PropTypes.string,
};

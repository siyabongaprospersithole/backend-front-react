import React from 'react'; // Import React for using JSX
import PropTypes from 'prop-types'; // Import PropTypes for defining prop types

// Define a functional component named FilterText
const FilterText = ({ filterText, onFilterTextChange }) => {
  return (
    <div className="filter-text">
      <label>Filter by Name: </label>
      <input
        className='form-control'
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)} // Call the prop function when input changes
      />
    </div>
  );
};

// Define prop types for FilterText component
FilterText.propTypes = {
  filterText: PropTypes.string.isRequired, // filterText should be a required string
  onFilterTextChange: PropTypes.func.isRequired, // onFilterTextChange should be a required function
};

export default FilterText; // Export the FilterText component

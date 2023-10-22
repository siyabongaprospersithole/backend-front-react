import React from 'react'; // Import React for using JSX
import PropTypes from 'prop-types'; // Import PropTypes for defining prop types

// Define a functional component named FilterSort
export const FilterSort = ({ sortType, onSortChange }) => {
  return (
    <div className="filter-sort">
      <label>Sort By: </label>
      <select className='form-control' value={sortType} onChange={(e) => onSortChange(e.target.value)}>
        <option value="name">Name (A-Z)</option>
        <option value="name_desc">Name (Z-A)</option>
        {/* Add more sorting options here if needed */}
      </select>
    </div>
  );
};

// Define prop types for FilterSort component
FilterSort.propTypes = {
  sortType: PropTypes.string.isRequired, // sortType should be a required string
  onSortChange: PropTypes.func.isRequired, // onSortChange should be a required function
};

export default FilterSort; // Export the FilterSort component

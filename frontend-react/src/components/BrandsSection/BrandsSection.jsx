// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import BrandList from './BrandList';
import FilterSort from './FilterSort';
import FilterText from './FilterText';
import { fetchBrands } from '../../../services/apiService'; // Import a service function for fetching data
import "./style.css"; // Import the CSS style for this component

// Define the BrandsSection component as a functional component
export const BrandsSection = () => {
  // Define and initialize state variables using the useState hook
  const [brands, setBrands] = useState([]); // Store the list of brands
  const [filteredBrands, setFilteredBrands] = useState([]); // Store the filtered list of brands
  const [sortType, setSortType] = useState('name'); // Define the sorting type
  const [filterText, setFilterText] = useState(''); // Define the text filter

  // Use the useEffect hook to fetch brands data when the component mounts
  useEffect(() => {
    const getBrands = async () => {
      try {
        // Fetch brands data from an API service
        const brandsData = await fetchBrands();
        console.log(brandsData); // Log the fetched data (for debugging)
        if (brandsData) {
          setBrands(brandsData); // Update the brands state with the fetched data
          setFilteredBrands(brandsData); // Initialize the filtered brands with all brands
        }
      } catch (error) {
        console.error('Error fetching brands', error); // Log an error message in case of failure
      }
    };

    getBrands(); // Invoke the getBrands function when the component mounts
  }, []);

  // Use another useEffect hook to filter and sort the brands based on user input
  useEffect(() => {
    // Filter the brands based on the filterText and store the result in the 'filtered' variable
    const filtered = brands.filter((brand) =>
      brand.name.toLowerCase().includes(filterText.toLowerCase())
    );

    // Sort the 'filtered' brands based on the 'sortType' selected by the user
    if (sortType === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === 'nameDesc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Update the 'filteredBrands' state with the sorted and filtered results
    setFilteredBrands(filtered);
  }, [filterText, brands, sortType]);

  return (
    // Render the BrandsSection component's JSX (HTML-like) structure
    <section id="trusted-brands" className="mt-97">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="headisng-tag-3" style={{ width: "195px", height: "29px", flexShrink: 0 }}>
              <div className="rectangle-3"></div>
              <h2 className="text-wrapper-6">You’ll be in good company</h2>
            </div>
          </div>
        </div>
        <div className="row mt-8" style={{ marginTop: "27px", marginBottom: "27px" }}>
          <h1 className="main-heading mt-2">Trusted by leading brands</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <FilterSort
              sortType={sortType}
              onSortChange={(newSortType) => setSortType(newSortType)}
            />
          </div>
          <div className='col'>
            <FilterText
              filterText={filterText}
              onFilterTextChange={(newFilterText) => setFilterText(newFilterText)}
            />
          </div>
        </div>
        <BrandList brands={filteredBrands} />
      </div>
    </section>
  );
}

export default BrandsSection; // Export the BrandsSection component

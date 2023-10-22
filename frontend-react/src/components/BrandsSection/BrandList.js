import React from 'react';
import BrandItem from './BrandItem';

// BrandList component that receives a list of 'brands' as a prop
function BrandList({ brands }) {
  return (
    <div className="row mt-50">
      {/* Map through the list of brands and render each one using BrandItem component */}
      {brands.map((brand) => (
        // Assign a unique key based on 'brand.id' to each BrandItem
        <BrandItem key={brand.id} brand={brand} />
      ))}
    </div>
  );
}

export default BrandList;

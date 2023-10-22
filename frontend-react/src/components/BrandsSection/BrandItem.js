
import React from 'react';

// BrandItem component that receives a 'brand' object as a prop
function BrandItem({ brand }) {
  return (
    <div className="col">
      <img src={brand.image} alt={brand.name} />
    </div>
    
  );
}

export default BrandItem;

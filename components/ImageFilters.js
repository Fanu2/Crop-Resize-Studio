import { useState } from 'react';

const ImageFilters = () => {
  const [filter, setFilter] = useState('none');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Image Filters</h2>
      <select onChange={handleFilterChange}>
        <option value="none">None</option>
        <option value="grayscale(100%)">Grayscale</option>
        <option value="sepia(100%)">Sepia</option>
        <option value="blur(5px)">Blur</option>
      </select>
      <img
        src="/sample-image.jpg"
        alt="Filtered"
        style={{ filter, width: '300px' }}
      />
    </div>
  );
};

export default ImageFilters;

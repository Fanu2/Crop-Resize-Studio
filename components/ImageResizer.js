import { useState } from 'react';

const ImageResizer = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [width, setWidth] = useState(300); // Default width
  const [height, setHeight] = useState(300); // Default height

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const handleResize = () => {
    const img = document.getElementById('resizableImage');
    img.width = width;
    img.height = height;
  };

  return (
    <div>
      <h2>Image Resizer</h2>
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <input
        type="number"
        placeholder="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={handleResize}>Resize Image</button>

      {imageUrl && (
        <img
          id="resizableImage"
          src={imageUrl}
          alt="Resizable"
          style={{ marginTop: '10px' }}
        />
      )}
    </div>
  );
};

export default ImageResizer;

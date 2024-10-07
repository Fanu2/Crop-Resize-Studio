import { useRef, useState } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const ImageCropper = () => {
  const imageRef = useRef(null);
  const [cropper, setCropper] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    imageRef.current.src = imageUrl;

    if (cropper) {
      cropper.destroy();
    }

    const newCropper = new Cropper(imageRef.current, {
      aspectRatio: 1,
    });
    setCropper(newCropper);
  };

  const handleCrop = () => {
    const croppedCanvas = cropper.getCroppedCanvas();
    const croppedUrl = croppedCanvas.toDataURL();
    setCroppedImage(croppedUrl);
  };

  return (
    <div>
      <h2>Image Cropper</h2>
      <input type="file" onChange={handleImageChange} />
      <img ref={imageRef} style={{ width: '300px' }} />
      <button onClick={handleCrop}>Crop Image</button>
      {croppedImage && <img src={croppedImage} alt="Cropped" />}
    </div>
  );
};

export default ImageCropper;

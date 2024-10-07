import { useRef, useState } from 'react';

const VideoThumbnails = () => {
  const videoRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  const captureThumbnail = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const thumbnailUrl = canvas.toDataURL();
    setThumbnail(thumbnailUrl);
  };

  return (
    <div>
      <h2>Capture Video Thumbnail</h2>
      <video ref={videoRef} width="400" controls>
        <source src="/sample-video.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={captureThumbnail}>Capture Thumbnail</button>
      {thumbnail && <img src={thumbnail} alt="Thumbnail" />}
    </div>
  );
};

export default VideoThumbnails;

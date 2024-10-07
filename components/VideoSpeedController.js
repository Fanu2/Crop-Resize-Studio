import { useRef } from 'react';

const VideoSpeedController = () => {
  const videoRef = useRef(null);

  const handleSpeedChange = (e) => {
    videoRef.current.playbackRate = e.target.value;
  };

  return (
    <div>
      <h2>Video Speed Controller</h2>
      <video ref={videoRef} width="400" controls>
        <source src="/sample-video.mp4" type="video/mp4" />
      </video>
      <br />
      <label>Playback Speed: </label>
      <select onChange={handleSpeedChange}>
        <option value="0.5">0.5x</option>
        <option value="1">1x</option>
        <option value="1.5">1.5x</option>
        <option value="2">2x</option>
      </select>
    </div>
  );
};

export default VideoSpeedController;

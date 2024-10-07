import { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <h2>Video Player</h2>
      <video ref={videoRef} width="400" controls>
        <source src="/sample-video.mp4" type="video/mp4" />
      </video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default VideoPlayer;

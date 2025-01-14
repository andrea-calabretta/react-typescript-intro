import { useRef } from 'react';

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play(); // Riproduci il video
  };

  const handlePause = () => {
    videoRef.current?.pause(); // Pausa il video
  };

  return (
 <div>
      <video ref={videoRef} width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <button onClick={handlePlay}>Riproduci</button>
      <button onClick={handlePause}>Pausa</button>
    </div>
  );
};

export default VideoPlayer;

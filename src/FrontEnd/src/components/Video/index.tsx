import React, { useState } from 'react';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('BzV4BkxtyYs');

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        title="YouTube Video Player"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in- picture"
      />
    </div>
  );
};

export default VideoPlayer;

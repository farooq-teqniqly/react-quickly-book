import { useState, useRef } from "react";

const VIDEO_SRC =
  "//images-assets.nasa.gov/video/One%20Small%20Step/One%20Small%20Step~orig.mp4";

export const VideoPlayer = () => {
  const [isPlaying, setPlaying] = useState(false);
  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);

  const video = useRef();
  const onClickPlay = () => video.current.play();
  const onClickPause = () => video.current.pause();

  return (
    <section>
      <video
        ref={video}
        src={VIDEO_SRC}
        controls
        width="480"
        onPlay={onPlay}
        onPause={onPause}
      ></video>
      <button onClick={isPlaying ? onClickPause : onClickPlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </section>
  );
};

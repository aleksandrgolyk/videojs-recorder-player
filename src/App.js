import React, { useState } from "react";
import Record from "./Record";

export default function App() {
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(false);
  const [screen, setScreen] = useState(false);
  const [image, setImage] = useState(false);

  function toggleImage() {
    setImage(true);
    setAudio(false);
    setVideo(false);
    setScreen(false);
  }
  function toggleAudio() {
    setImage(false);
    setAudio(true);
    setVideo(false);
    setScreen(false);
  }
  function toggleVideo() {
    setImage(false);
    setAudio(true);
    setVideo(true);
    setScreen(false);
  }
  function toggleScreen() {
    setImage(false);
    setAudio(true);
    setVideo(false);
    setScreen(true);
  }

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <div className="uk-margin-small">
        <Record audio={audio} video={video} screen={screen} image={image} />
      </div>

      <div className="uk-margin-small">
        <div>
          <div
            onClick={toggleAudio}
            className={`${
              audio && !video && !screen && !image ? "active" : ""
            } uk-icon-button`}
            data-uk-icon="microphone"
          />
          <div
            className={`${
              image ? "active" : ""
            } uk-margin-small-left uk-icon-button`}
            data-uk-icon="camera"
            onClick={toggleImage}
          />
          <div
            className={`${
              video ? "active" : ""
            } uk-margin-small-left uk-icon-button`}
            data-uk-icon="video-camera"
            onClick={toggleVideo}
          />
          <div
            className={`${
              screen ? "active" : ""
            } uk-margin-small-left uk-icon-button`}
            data-uk-icon="laptop"
            onClick={toggleScreen}
          />
        </div>
      </div>

      <div className="uk-margin-small">
        <label>
          <input
            name="private"
            className="uk-checkbox"
            type="checkbox"
            checked={audio}
            onChange={(e) => setAudio(e.target.checked)}
            disabled={!video && !screen}
          />
          <span className="uk-margin-small-left uk-text-meta">Record with audio</span>
        </label>
      </div>
    </div>
  );
}

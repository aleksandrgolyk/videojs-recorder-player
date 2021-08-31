import React, {useState} from "react";
import Record from "./Record";
import {Box} from "@qonsoll/react-design";
import {AudioOutlined, CameraOutlined, LaptopOutlined, VideoCameraOutlined} from "@ant-design/icons";
import './Recorder/Recorder.style.css'

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
      <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Box mb={10}>
          <Record audio={audio} video={video} screen={screen} image={image}/>
        </Box>

        <Box mb={10}>
          <Box>
            <Box
                onClick={toggleAudio}
                className={`${audio && !video && !screen && !image ? "active" : ""} uk-icon-button`}
            >
              <AudioOutlined/>
            </Box>

            <Box
                className={`${
                    image ? "active" : ""
                } uk-margin-small-left uk-icon-button`}
                onClick={toggleImage}
            >
              <CameraOutlined/>
            </Box>
            <Box
                className={`${
                    video ? "active" : ""
                } uk-margin-small-left uk-icon-button`}
                onClick={toggleVideo}
            >
              <VideoCameraOutlined/>
            </Box>
            <Box
                className={`${
                    screen ? "active" : ""
                } uk-margin-small-left uk-icon-button`}
                // data-uk-icon="laptop"

                onClick={toggleScreen}
            >
              <LaptopOutlined/>
            </Box>
          </Box>
        </Box>

        <Box mb={10}>
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
        </Box>
      </Box>
  );
}

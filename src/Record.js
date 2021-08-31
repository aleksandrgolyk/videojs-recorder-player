import React, {useLayoutEffect, useRef} from "react";
// import audio first
import createOptions, {createRecordOptions} from "./options";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import "webrtc-adapter";
import RecordRTC from "recordrtc";
// register videojs-record plugin with this import
import "videojs-record/dist/css/videojs.record.css";
import "videojs-record/dist/videojs.record.js";

function initRecord(node, options) {
  const player = videojs(node, options, () => {
    const version_info =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
    videojs.log(version_info);
  });

  player.on("deviceReady", () => {
    console.log("device is ready!");
  });

  player.on("startRecord", () => {
    console.log("started recording!");
  });

  player.on("finishRecord", () => {
    console.log("finished recording: ", player.recordedData);
  });

  player.on("error", (element, error) => {
    console.warn(error);
  });

  player.on("deviceError", () => {
    console.error("device error:", player.deviceErrorCode);
  });

  return player;
}

function dispose(player) {
  player.record().reset();
}

function Record({audio, video, screen, image}) {
  const player = useRef(null);
  const videoNode = useRef(null);

  useLayoutEffect(() => {
    if (!player.current)
      player.current = initRecord(
          videoNode.current,
          createOptions({audio, video, screen, image})
      );
    else
      player.current
          .record()
          .loadOptions(createRecordOptions({audio, video, screen, image}));
    return () => {
      if (player.current) dispose(player.current);
    };
  }, [audio, video, screen, image]);

  return (
      <div data-vjs-player>
        <video
            id="myVideo"
            ref={videoNode}
            className="video-js vjs-default-skin vjs-big-play-centered"
            // playsInline
        />
      </div>
  );
}

export default Record;

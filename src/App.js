import "video.js/dist/video-js.min.css";
import videojs from "video.js";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
import "videojs-record/dist/videojs.record.js";
import "./styles.css";
import { useEffect, useRef } from "react";

let options = {
  controls: true,
  bigPlayButton: false,
  width: 800,
  height: 600,
  // fluid: true,
  plugins: {
    record: {
      audio: true, //allow record with audio
      video: true,
      maxLength: 30, //set video record duration in sec.
      displayMilliseconds: false,
      // fire the timestamp event every 5 seconds
      timeSlice: 2000
    }
  }
};

export default function App() {
  const inputDeviceIdIndex = useRef(0);
  useEffect(() => {
    let player = videojs("myVideo", options, function () {
      // print version information at startup to console
      let msg =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record") +
        " and recordrtc " +
        RecordRTC.version;
      videojs.log(msg);
    });

    // Helpers

    function setDeviceId(deviceId) {
      player.record().setVideoInput(deviceId);
    }


    // enumerate devices once
    player.one("deviceReady", function () {
      player.record().enumerateDevices();
    });

    player.on("enumerateReady", function () {
      const devices = player.record().devices;

      // Filter out video input devices
      const videoInputDevices = devices.filter(
        ({ kind }) => kind === "videoinput"
      );

      // change video input device
      setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId);

      console.log(videoInputDevices);

      // Add switch camera btn
      let Button = videojs.getComponent("Button");
      let SwitchCameraBtn = videojs.extend(Button, {
        constructor: function () {
          Button.apply(this, arguments);
          /* initialize your button */
          this.controlText("Switch camera");
        },
        handleClick: function () {
          // Switch camera on click
          inputDeviceIdIndex.current =
            (inputDeviceIdIndex.current + 1) % videoInputDevices.length;

          setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId);
        },
        buildCSSClass: function () {
          return "vjs-icon-spinner vjs-control vjs-button";
        }
      });
      videojs.registerComponent("SwitchCameraBtn", SwitchCameraBtn);

      player
        .getChild("controlBar")
        .addChild(
          "SwitchCameraBtn",
          {},
          player.controlBar.children().length - 2
        );
    });

    // error handling
    player.on("deviceError", function () {
      console.log("device error:", player.deviceErrorCode);
    });

    player.on("error", function (element, error) {
      console.error(error);
    });

    // user clicked the record button and started recording
    player.on("startRecord", function () {
      console.log("started recording!");
    });

    // user completed recording

    player.on("finishRecord", async function () {
      console.log("finished recording");
      console.log({ stream: player.recordedData });
      //saving record after stop recording
      player.record().saveAs({'video': 'my-video-file-name.mp4'});
      console.log("recording saved");
    });
    // user completed recording




    // monitor stream data during recording
    player.on("timestamp", function () {
      // console.log("current timestamp: ", player.currentTimestamp);
      // console.log(
      //   "all timestamps (" + player.allTimestamps.length + "): ",
      //   player.allTimestamps
      // );
      // // stream data
      // console.log({ stream: player.recordedData });
    });
  }, []);

  return (
    <div className="App">
      <div>
        <video id="myVideo" playsInline className="video-js vjs-default-skin" />
      </div>
    </div>
  );
}

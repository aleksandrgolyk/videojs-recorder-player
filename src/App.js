import "video.js/dist/video-js.min.css";
import videojs from "video.js";
import RecordRTC from "recordrtc";
import "videojs-record/dist/css/videojs.record.css";
import "videojs-record/dist/videojs.record.js";
import "./styles.css";
import './Recorder/Recorder.styles.css'
import {useEffect, useRef, useState} from "react";

import SwitchInputDevice from "./Recorder/SwitchInputDevice";

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
  const [player, setPlayer] = useState({})
  const [rec, setRec] = useState(false)
  const [showRec, setShowRec] = useState(false)

  let recButtonApear = () => {
    setShowRec(true)
  }

  useEffect(() => {
    let player = videojs("myVideo", options, function () {
      // print version information at startup to console
    });
    setPlayer(player)

    // Helpers
    function setDeviceId(deviceId) {
      player?.record()?.setVideoInput(deviceId);
    }

    player?.record()?.getDevice()
    player.on("deviceReady", recButtonApear)
    // setShowRec(true)

    // user clicked the record button and started recording
    // player.on("startRecord", function () {
    //   console.log("started recording!");
    // });

    // user completed recording

    // player.on("finishRecord", async function () {
    //   console.log("finished recording");
    //   console.log({stream: player.recordedData});
    //saving record after stop recording
    // player.record().saveAs({'video': 'my-video-file-name.mp4'});
    // console.log("recording saved");
    // });
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

  const onRecord = () => {
    player?.record()?.start();
    console.log("Media recording is going!");
    setRec(true)
    console.log(rec);
  }
  const onStop = () => {
    player?.record()?.stop();
    setRec(false)
    console.log("Media recording was stoped!");
  }

  return (
      <div className="App" style={{position: 'relative'}}>
        <video id="myVideo" playsInline className="video-js vjs-default-skin"/>
        {showRec && <div className='buttonWrapper'>
          {rec ? <button className='playerStopButton' onClick={onStop}/> :
              <button className='playerRecordButton' onClick={onRecord}/>}
        </div>}
        {/*<SwitchInputDevice player={player}/>*/}
      </div>
  );
}

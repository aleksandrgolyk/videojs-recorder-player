import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import RecordRTC from 'recordrtc'
import 'videojs-record/dist/css/videojs.record.css'
import 'videojs-record/dist/videojs.record.js'
import './styles.css'
import './Recorder/Recorder.styles.css'
import { useEffect, useRef, useState } from 'react'

import SwitchInputDevice from './Recorder/SwitchInputDevice'

let options = {
  controls: false,
  bigPlayButton: false,
  width: 800,
  height: 600,
  // loop:true,
  // fluid: true,
  autoplay: true,
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
}

export default function App() {
  const inputDeviceIdIndex = useRef(0)
  const [player, setPlayer] = useState({})
  const [record, setRecord] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isRecordButtonsBlockShowing, setIsRecordButtonsBlockShowing] =
    useState(true)

  // record button manipulation - start -
  const recordButtonsBlockAppear = () => {
    setLoading(false)
  }
  const recordButtonsBlockDisappear = () => {
    setIsRecordButtonsBlockShowing(false)
  }
  // record button manipulation - end -

  useEffect(() => {
    let player = videojs('myVideo', options, function () {
      // print version information at startup to console
    })
    setPlayer(player)

    // Helpers
    function setDeviceId(deviceId) {
      player?.record()?.setVideoInput(deviceId)
    }

    player.record().getDevice()

    //Appear record button on pade load
    player.on('deviceReady', recordButtonsBlockAppear)

    // player.on("finishRecord", function () {
    // })
    // user clicked the record button and started recording
    // player.on("startRecord", function () {
    //   console.log("started recording!");
    // });

    // user completed recording

    player.on('finishRecord', recordButtonsBlockDisappear)
    // player.on("finishRecord", async function () {
    //   console.log("finished recording");
    //   console.log({stream: player.recordedData});
    //saving record after stop recording
    // player.record().saveAs({'video': 'my-video-file-name.mp4'});
    // console.log("recording saved");
    // });
    // user completed recording

    // monitor stream data during recording
    player.on('timestamp', function () {
      // console.log("current timestamp: ", player.currentTimestamp);
      // console.log(
      //   "all timestamps (" + player.allTimestamps.length + "): ",
      //   player.allTimestamps
      // );
      // // stream data
      // console.log({ stream: player.recordedData });
    })
  }, [])

  // user clicked the record button and started recording
  const onRecordStart = () => {
    player?.record()?.start()
    console.log('Media recording is going!')
    setRecord(true)
    console.log(record)
  }
  // user clicked the stop record button and stopped recording
  const onRecordStop = () => {
    player?.record()?.stop()
    setRecord(false)
    console.log('Media recording was stopped!')
  }

  const onReplayRecord = () => {
    setRecord(false)
    player?.play()
  }

  return (
    <div className="App" style={{ position: 'relative' }}>
      <video id="myVideo" playsInline className="video-js vjs-default-skin" />
      {loading ? (
        <div className="spinner-wrapper">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <>
          {isRecordButtonsBlockShowing ? (
            <div className="recordButtonsGroupWrapper">
              {record ? (
                <button
                  className="recorderButtons recorderStopButton"
                  onClick={onRecordStop}
                />
              ) : (
                <button
                  className="recorderButtons recorderRecordButton"
                  onClick={onRecordStart}
                />
              )}
            </div>
          ) : (
            <div className="approveVideoBlock">
              <div className="approveVideoBlockQuestion">Like it?</div>
              <div className="approveVideoBlockBtnGroup">
                <button
                  className="approveVideoBlockBtn approveBtn"
                  // onClick={() => console.log('1')}>
                  onClick={console.log('bad video_')}>
                  YES
                </button>
                <button
                  className="approveVideoBlockBtn refuseBtn"
                  onClick={(e) => {
                    setIsRecordButtonsBlockShowing(true)
                  }}>
                  NO
                </button>
                <button
                  className="approveVideoBlockBtn replayBtn"
                  onClick={onReplayRecord}>
                  {/*Replay*/}
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/*<SwitchInputDevice player={player}/>  /* for nex improvements*/}
    </div>
  )
}

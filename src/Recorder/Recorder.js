import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import RecordRTC from 'recordrtc'
import 'videojs-record/dist/css/videojs.record.css'
import 'videojs-record/dist/videojs.record.js'
import '../styles.css'
import './Recorder.styles.css'
import { useEffect, useRef, useState } from 'react'
import magnetButton from './helpers/magnetButton'
import Spinner from '../components/Spinner/Spinner'
import Dropdown from '../components/Dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import DeviceSelectionList from '../domains/DeviceSelection/components/DeviceSelectionList'

let options = {
  // controls: true,
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
      // frameWidth: 640,
      // frameHeight: 480
      // frameWidth: 1280,
      // frameHeight: 960
    }
  }
}

export default function Recorder() {
  const inputDeviceIdIndex = useRef(0)
  const [player, setPlayer] = useState({})
  const [record, setRecord] = useState(false)
  const [loading, setLoading] = useState(true)
  const [deviceList, setDeviceDeviceList] = useState([])
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
    let player = videojs('myVideo', options, function () {})
    setPlayer(player)

    // ===== DEVICES TRACKING AND SHOW SECTION ---start ----
    // enumerate devices once
    player.one('deviceReady', function () {
      player.record().enumerateDevices()
    })

    player.on('enumerateReady', function () {
      setDeviceDeviceList(player.record().devices)
    })
    // ===== DEVICES TRACKING AND SHOW SECTION ---end ----

    // Started record devices
    player.record().getDevice()

    //Appear record button on pade load
    player.on('deviceReady', recordButtonsBlockAppear)
    player.on('deviceReady', magnetButton)
    player.on('ended', function () {
      player.record().reset()
    })

    player.on('finishRecord', recordButtonsBlockDisappear)

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
  // ====== split all devices to video and audio block ===
  const videoDevices = deviceList.filter((item) => item.kind === 'videoinput')
  // console.log(videoDevices[0]?.deviceId)
  const audioDevices = deviceList.filter((item) => item.kind === 'audioinput')
  // ====== split all devices to video and audio block ===
  // user clicked the record button and started recording
  const onRecordStart = () => {
    player?.record()?.start()
    console.log('Media recording is going!')
    setRecord(true)
    // console.log(record)
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
      <DeviceSelectionList
        player={player}
        videoDevices={videoDevices}
        audioDevices={audioDevices}
      />
      {loading ? (
        <Spinner />
      ) : (
        <>
          {isRecordButtonsBlockShowing ? (
            <div className="recordButtonsGroupWrapper">
              {record ? (
                <div className="magnetWrapper">
                  <button
                    className="recorderButtons recorderStopButton"
                    onClick={onRecordStop}
                  />
                </div>
              ) : (
                <div className="magnetWrapper">
                  <button
                    className="recorderButtons recorderRecordButton"
                    onClick={onRecordStart}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="approveVideoBlockWrapper">
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
    </div>
  )
}

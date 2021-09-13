import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
import RecordRTC from 'recordrtc'
import 'videojs-record/dist/css/videojs.record.css'
import 'videojs-record/dist/videojs.record.js'
import '../styles.css'
import './Recorder.styles.css'
import React, { useEffect, useRef, useState } from 'react'
import magnetButton from './helpers/magnetButton'
import Spinner from '../components/Spinner/Spinner'
import Dropdown from '../components/Dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import DeviceSelectionList from '../domains/DeviceSelection/components/DeviceSelectionList'
import ApproveButtonsBlockAdvancedView from '../domains/ApproveButtonsBlockAdvancedView'
import RecordButtonsBlockAdvancedView from '../domains/RecordButtonsBlockAdvancedView'
import PictureInPicture from '../domains/DeviceSelection/components/PictureInPicture'
import uploadToConvert from './helpers/convertVideo'
// import RecordAdvancedView from '../domains/RecordAdvancedView/RecordAdvancedView'

// ===PiP options===
let pipEnabled = false
let pipStatusMsg
if (!('pictureInPictureEnabled' in document)) {
  pipStatusMsg = 'The Picture-in-Picture API is not available.'
} else if (!document.pictureInPictureEnabled) {
  pipStatusMsg = 'The Picture-in-Picture API is disabled.'
} else {
  pipEnabled = true
}
// ===PiP options===

let options = {
  controls: true,
  bigPlayButton: false,
  width: 800,
  height: 600,
  // loop:true,
  // fluid: true,
  autoplay: true,
  plugins: {
    record: {
      screen: true,
      audio: true, //allow record with audio
      video: true,
      maxLength: 30, //set video record duration in sec.
      displayMilliseconds: false,
      // fire the timestamp event every 5 seconds
      timeSlice: 5000,
      pip: pipEnabled,
      debug: true
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
  const [showRecordButtonsBlock, setShowRecordButtonsBlock] = useState(true)
  const [showDeviceSelectionList, setShowDeviceSelectionList] = useState(true)
  const [pipEnabled, setPipEnabled] = useState(false)
  // record button manipulation - start -
  const recordButtonsBlockAppear = () => {
    setLoading(false)
  }
  const recordButtonsBlockDisappear = () => {
    setShowRecordButtonsBlock(false)
  }
  // const toggletPip = () => {
  //   setPipEnabled(true)
  // }
  // record button manipulation - end -

  useEffect(() => {
    let player = videojs('myVideo', options, function () {})
    setPlayer(player)

    // ===== DEVICES TRACKING AND SHOW SECTION ---start ----
    // enumerate devices once
    player.one('deviceReady', function () {
      player.record().enumerateDevices()
    })

    // player.on('enumerateReady', function () {
    //   setDeviceDeviceList(player.record().devices)
    // })
    // ===== DEVICES TRACKING AND SHOW SECTION ---end ----

    // Started record devices
    player.record().getDevice()

    //Appear record button on pade load
    player.on('deviceReady', recordButtonsBlockAppear)
    player.on('deviceReady', magnetButton)
    player.on('ended', function () {
      // player.record().reset()
    })

    // ====PiP==== start
    // handle Picture-in-Picture events
    let pipWindow
    player.on('enterPIP', function (element, evt) {
      console.log('Entered Picture-in-Picture')
      setPipEnabled(true)

      // listen for window resize
      pipWindow = evt.pictureInPictureWindow
      pipWindow.addEventListener('resize', onPipWindowResize)

      console.log(`Window size is ${pipWindow.width} x ${pipWindow.height}`)
    })
    player.on('leavePIP', function () {
      console.log('Left Picture-in-Picture')
      setPipEnabled(false)

      // stop listening for resize
      pipWindow.removeEventListener('resize', onPipWindowResize)
    })

    function onPipWindowResize(evt) {
      // print window size to console
      console.log(
        `Window size changed to ${pipWindow.width} x ${pipWindow.height}`
      )
    }
    // ====PiP==== end
    const readFileAsBuffer = (file) => {
      return new Promise((resolve, reject) => {
        // Create file reader
        let reader = new FileReader()
        // Register event listeners
        reader.addEventListener('loadend', (e) => resolve(e.target.result))
        reader.addEventListener('error', reject)

        // Read file
        reader.readAsArrayBuffer(file)
      })
    }
    const getAsByteArray = async (file) => {
      return new Uint8Array(await readFileAsBuffer(file))
    }

    // =============UPLOAD to convert 2 - START
    uploadToConvert({ player })
    // =============UPLOAD to convert 2 - END

    player.on('finishRecord', recordButtonsBlockDisappear)
    player.on('finishRecord', async function () {
      // await upload(player.recordedData)
      // console.log('recorded-DAta:', player.recordedData)
    })

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
    setShowDeviceSelectionList(false)
    // console.log(record)
  }
  // user clicked the stop record button and stopped recording
  const onRecordStop = () => {
    player?.record()?.stop()
    setRecord(false)
    console.log('Media recording was stopped!')
    console.log('finished recording: ', player.recordedData)
  }

  const onReplayRecord = () => {
    setRecord(false)
    player?.play()
    console.log('video replaying')
  }
  const onApproveRecord = () => {
    // return
    player.record().saveAs({ video: 'my-video-file-name.webm' })
  }

  const togglePip = async () => {
    if (player.record().mediaElement !== document.pictureInPictureElement) {
      await player.record().mediaElement.requestPictureInPicture()
      setPipEnabled(true)
    } else {
      await document.exitPictureInPicture()
      setPipEnabled(false)
    }
  }

  // ============Screen recorder===========
  // ============Screen recorder===========

  const onScreenRecord = () => {
    // player?.current.record().loadOptions(createRecordOptions{audio, video, screen, image}))
    console.log('', player.recorded)
  }

  return (
    <div className="App" style={{ position: 'relative' }}>
      <video id="myVideo" playsInline className="video-js vjs-default-skin" />
      <button onClick={onScreenRecord}>screen</button>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showRecordButtonsBlock ? (
            <>
              <PictureInPicture pipEnabled={pipEnabled} togglePip={togglePip} />

              <RecordButtonsBlockAdvancedView
                onRecordStop={onRecordStop}
                onRecordStart={onRecordStart}
                record={record}
              />
              <DeviceSelectionList
                player={player}
                videoDevices={videoDevices}
                audioDevices={audioDevices}
                showDeviceSelectionList={showDeviceSelectionList}
              />
            </>
          ) : (
            <ApproveButtonsBlockAdvancedView
              player={player}
              setShowRecordButtonsBlock={setShowRecordButtonsBlock}
              setShowDeviceSelectionList={setShowDeviceSelectionList}
              onReplayRecord={onReplayRecord}
              onApproveRecord={onApproveRecord}
            />
          )}
        </>
      )}
    </div>
  )
}

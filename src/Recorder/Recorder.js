import 'video.js/dist/video-js.min.css'
import videojs from 'video.js'
// import RecordRTC from 'recordrtc'
import 'videojs-record/dist/css/videojs.record.css'
import 'videojs-record/dist/videojs.record.js'
import '../styles.css'
import './Recorder.styles.css'
import React, { useEffect, useState } from 'react'
import magnetButton from './helpers/magnetButton'
import Spinner from '../components/Spinner/Spinner'
import DeviceSelectionList from '../domains/DeviceSelection/components/DeviceSelectionList'
import ApproveButtonsBlockAdvancedView from '../domains/ApproveButtonsBlockAdvancedView'
import RecordButtonsBlockAdvancedView from '../domains/RecordButtonsBlockAdvancedView'
import PictureInPicture from '../domains/DeviceSelection/components/PictureInPicture'
import uploadToConvert from './helpers/convertVideo'
import useRecorderActions from './suggestion/useRecorderActions'
import RecorderProvider from './suggestion/RecorderProvider'

const FORMAT_MP_4 = 'mp4'
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
      screen: false,
      audio: true, //allow record with audio
      video: true,
      maxLength: 30, //set video record duration in sec.
      displayMilliseconds: false,
      // fire the timestamp event every 5 seconds
      timeSlice: 5000,
      pip: true,
      debug: true
      // frameWidth: 640,
      // frameHeight: 480
      // frameWidth: 1280,
      // frameHeight: 960
    }
  }
}

export default function Recorder({ id, options }) {
  // const inputDeviceIdIndex = useRef(0)
  const [player, setPlayer] = useState({})
  const [record, setRecord] = useState(false)
  const [loading, setLoading] = useState(true)
  const [deviceList, setDeviceDeviceList] = useState([])
  const [showRecordButtonsBlock, setShowRecordButtonsBlock] = useState(true)
  const [showDeviceSelectionList, setShowDeviceSelectionList] = useState(true)
  const {
    recordButtonsBlockAppear,
    recordButtonsBlockDisappear,
    onStart,
    onStop,
    onApprove,
    onReplay,
    onScreen
  } = useRecorderActions()
  // const recordButtonsBlockAppear = () => {
  //   setLoading(false)
  // }
  // const recordButtonsBlockDisappear = () => {
  //   setShowRecordButtonsBlock(false)
  // }
  // ====== split all devices to video and audio block ===
  const videoDevices = deviceList.filter((item) => item.kind === 'videoinput')
  const audioDevices = deviceList.filter((item) => item.kind === 'audioinput')
  // ====== split all devices to video and audio block ===
  // user clicked the record button and started recording
  // const onRecordStart = () => {
  //   player?.record()?.start()
  //   setRecord(true)
  //   setShowDeviceSelectionList(false)
  // }
  // // user clicked the stop record button and stopped recording
  // const onRecordStop = () => {
  //   player?.record()?.stop()
  //   setRecord(false)
  // }
  // const onReplayRecord = () => {
  //   setRecord(false)
  //   player?.play()
  // }
  //
  // // =============UPLOAD to convert 2 - START
  // const onApproveRecord = () => {
  //   const binaryData = player.recordedData
  //   uploadToConvert(binaryData, FORMAT_MP_4)
  // }
  // // =============UPLOAD to convert 2 - END
  //
  // // ============Screen recorder===========
  // const onScreenRecord = () => {
  //   console.log('ScreenRecord was pressed')
  // }
  // ============Screen recorder===========

  useEffect(() => {
    let player = videojs(id, options, function () {})
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

    //Appear record button on pade load - show/hide
    player.on('deviceReady', recordButtonsBlockAppear)
    player.on('deviceReady', magnetButton)
    player.on('finishRecord', recordButtonsBlockDisappear)
  }, [])

  return (
    <RecorderProvider>
      <Recorder /> // video, buttons - const recorder = useRecorder()
    </RecorderProvider>
    // <div className="App" style={{ position: 'relative' }}>
    //   <video id={id} playsInline className="video-js vjs-default-skin" /> //
    //   separate component
    //   {loading ? (
    //     <Spinner />
    //   ) : (
    //     <>
    //       {showRecordButtonsBlock ? (
    //         <>
    //           <PictureInPicture player={player} />
    //           <RecordButtonsBlockAdvancedView
    //             onRecordStop={onRecordStop}
    //             onRecordStart={onRecordStart}
    //             record={record}
    //           />
    //           <DeviceSelectionList
    //             player={player}
    //             videoDevices={videoDevices}
    //             audioDevices={audioDevices}
    //             showDeviceSelectionList={showDeviceSelectionList}
    //             onScreenRecord={onScreenRecord}
    //           />
    //         </>
    //       ) : (
    //         <ApproveButtonsBlockAdvancedView
    //           player={player}
    //           setShowRecordButtonsBlock={setShowRecordButtonsBlock}
    //           setShowDeviceSelectionList={setShowDeviceSelectionList}
    //           onReplayRecord={onReplayRecord}
    //           onApproveRecord={onApproveRecord}
    //         />
    //       )}
    //     </>
    //   )}
    // </div>
  )
}

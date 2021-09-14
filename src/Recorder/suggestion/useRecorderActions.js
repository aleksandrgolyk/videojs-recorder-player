import React from 'react'
import uploadToConvert from '../helpers/convertVideo'

const useRecorderActions = () => {
  // const onDeviceLoaded = (setLoading) => {
  //   setLoading(false)
  // }
  // const recordButtonsBlockDisappear = (setShowRecordButtonsBlock) => {
  //   setShowRecordButtonsBlock(false)
  // }
  // // ====== split all devices to video and audio block ===
  // const videoDevices = deviceList.filter((item) => item.kind === 'videoinput')
  // const audioDevices = deviceList.filter((item) => item.kind === 'audioinput')
  // ====== split all devices to video and audio block ===
  // user clicked the record button and started recording
  const onRecordStart = () => {
    player?.record()?.start()
    setRecord(true)
    setShowDeviceSelectionList(false)
    setShowRecordButtonsBlock(false)
  }
  // user clicked the stop record button and stopped recording
  const onRecordStop = () => {
    player?.record()?.stop()
    setRecord(false)
  }
  const onReplayRecord = () => {
    setRecord(false)
    player?.play()
  }

  // =============UPLOAD to convert 2 - START
  const onApproveRecord = () => {
    const binaryData = player.recordedData
    uploadToConvert(binaryData, FORMAT_MP_4)
  }
  // =============UPLOAD to convert 2 - END

  // ============Screen recorder===========
  const onScreenRecord = () => {
    console.log('ScreenRecord was pressed')
  }

  return {
    recordButtonsBlockAppear,
    recordButtonsBlockDisappear,
    onStart,
    onStop,
    onApprove,
    onReplay,
    onScreen
  }
}

export default useRecorderActions

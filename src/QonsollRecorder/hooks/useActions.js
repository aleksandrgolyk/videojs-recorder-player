import { useState } from 'react'
import uploadToConvert from '../helpers/convertVideo'
import useRecorder from './useRecorder'

const useActions = () => {
  const {
    player,
    setLoading,
    setShowRecordButtonsBlock,
    setRecord,
    setShowDeviceSelectionList
  } = useRecorder()

  const onDeviceLoaded = (setLoading) => {
    setLoading(false)
  }
  const recordButtonsBlockDisappear = (setShowRecordButtonsBlock) => {
    setShowRecordButtonsBlock(false)
  }

  const magnetButton = () => {
    const magneticBtns = document.querySelectorAll('.magnetWrapper')

    magneticBtns?.forEach((btn) => {
      btn.addEventListener('mousemove', function (e) {
        const position = btn?.getBoundingClientRect()
        const x = e.pageX - position.left - position.width / 2
        const y = e.pageY - position.top - position.height / 2
        const btnFirstChild = btn?.children[0]
        if (btnFirstChild) {
          btnFirstChild.style.transform =
            'translate(' + x * 0.3 + 'px, ' + y * 0.5 + 'px)'
        }
      })
    })

    magneticBtns.forEach((btn) => {
      btn?.addEventListener('mouseout', function (e) {
        const btnFirstChild = btn?.children[0]
        if (btnFirstChild) {
          btnFirstChild.style.transform = 'translate(0px, 0px)'
        }
      })
    })
  }

  // // ====== split all devices to video and audio block ===
  // const videoDevices = deviceList.filter((item) => item.kind === 'videoinput')
  // const audioDevices = deviceList.filter((item) => item.kind === 'audioinput')
  // ====== split all devices to video and audio block ===
  // user clicked the record button and started recording
  const onStart = () => {
    player?.record()?.start()
    setRecord(true)
    setShowDeviceSelectionList(false)
  }
  // user clicked the stop record button and stopped recording
  const onStop = () => {
    player?.record()?.stop()
    setRecord(false)
  }
  const onReplay = () => {
    setRecord(false)
    player?.play()
  }

  // =============UPLOAD to convert 2 - START
  const onApprove = () => {
    const binaryData = player.recordedData
    uploadToConvert(binaryData, 'mp4')
  }
  // =============UPLOAD to convert 2 - END

  // ============Screen recorder===========
  const onScreen = () => {
    console.log('ScreenRecord was pressed')
  }

  return {
    onDeviceLoaded,
    recordButtonsBlockDisappear,
    magnetButton,
    onStart,
    onStop,
    onApprove,
    onReplay,
    onScreen
  }
}

export default useActions

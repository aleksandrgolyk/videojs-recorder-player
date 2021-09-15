import RecorderContext from './RecorderContext'
import { useState } from 'react'
import { useInit, useActions } from '../hooks'

const RecorderProvider = ({ children }) => {
  const [options, setOptions] = useState({
    controls: true,
    bigPlayButton: false,
    width: 800,
    height: 600,
    // fluid:true,
    autoplay: true,
    plugins: {
      record: {
        audio: true,
        video: true,
        screen: false,
        image: false,
        maxLength: 30, //set video record duration in sec.
        displayMilliseconds: false,
        timeSlice: 5000,
        pip: true,
        debug: true
      }
    }
  })
  const [player, deviceList] = useInit('myVideo', options)
  const [record, setRecord] = useState(false)
  const [loading, setLoading] = useState(true)
  const [showRecordButtonsBlock, setShowRecordButtonsBlock] = useState(true)
  const [showDeviceSelectionList, setShowDeviceSelectionList] = useState(true)

  return (
    <RecorderContext.Provider
      value={{
        player,
        deviceList,
        record,
        setRecord,
        loading,
        setLoading,
        showRecordButtonsBlock,
        setShowRecordButtonsBlock,
        showDeviceSelectionList,
        setShowDeviceSelectionList
      }}>
      {children}
    </RecorderContext.Provider>
  )
}

export default RecorderProvider

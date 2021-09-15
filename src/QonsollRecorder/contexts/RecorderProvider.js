import RecorderContext from './RecorderContext'
import { useState } from 'react'
import { useInit, useActions } from '../hooks'

const RecorderProvider = ({ children }) => {
  const [player, deviceList] = useInit('myVideo')
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

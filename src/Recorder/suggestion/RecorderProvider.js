import RecorderContext from './RecorderContext'
import { useState } from 'react'
import useRecorderActions from './useRecorderActions'
import magnetButton from "../helpers/magnetButton";

const RecorderProvider = ({ children }) => {
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
  } = useRecorderActions({...})

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
    <RecorderContext.Provider
      value={{
        player,
        record,
        loading,
        deviceList,
        showRecordButtonsBlock,
        showDeviceSelectionList,
        setPlayer,
        setRecord,
        setLoading,
        setDeviceDeviceList,
        setShowRecordButtonsBlock,
        setShowDeviceSelectionList,
        recordButtonsBlockAppear,
        recordButtonsBlockDisappear,
        onStart,
        onStop,
        onApprove,
        onReplay,
        onScreen
      }}>
      {children}
    </RecorderContext.Provider>
  )
}

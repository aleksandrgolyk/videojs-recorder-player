import useRecorder from '../useRecorder'
import { useEffect, useState } from 'react'

const useEnumerateReady = (player) => {
  const [deviceList, setDeviceList] = useState(null)
  useEffect(() => {
    player.on('enumerateReady', function () {
      setDeviceList(player.record().devices)
    })
    return () => {}
  }, [])

  return deviceList
}
export default useEnumerateReady

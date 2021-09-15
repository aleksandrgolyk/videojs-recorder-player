import useRecorder from '../useRecorder'
import { useEffect, useState } from 'react'

const useEnumerateReady = () => {
  const [deviceList, setDeviceList] = useState(null)
  const { player } = useRecorder()
  useEffect(() => {
    player.on('enumerateReady', function () {
      setDeviceList(player.record().devices)
    })
    return () => {}
  }, [player])

  return deviceList
}
export default useEnumerateReady

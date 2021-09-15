import useRecorder from '../useRecorder'
import { useEffect } from 'react'

const useDeviceReady = () => {
  const { player } = useRecorder()
  useEffect(() => {
    player.one('deviceReady', function () {
      player.record().enumerateDevices()
    })
    return () => {}
  }, [player])
}
export default useDeviceReady

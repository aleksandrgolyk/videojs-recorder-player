import useRecorder from '../useRecorder'
import { useEffect } from 'react'

const useDeviceReady = (player) => {
  useEffect(() => {
    player.one('deviceReady', function () {
      player.record().enumerateDevices()
    })
    return () => {}
  }, [])
}
export default useDeviceReady

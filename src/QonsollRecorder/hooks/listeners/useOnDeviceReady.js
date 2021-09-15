import useRecorder from '../useRecorder'
import useActions from '../useRecorder'
import { useEffect } from 'react'

const useOnDeviceReady = (player) => {
  const { onDeviceLoaded, magnetButton } = useActions()
  useEffect(() => {
    player.on('deviceReady', onDeviceLoaded)
    player.on('deviceReady', magnetButton)
    return () => {}
  }, [])
}
export default useOnDeviceReady

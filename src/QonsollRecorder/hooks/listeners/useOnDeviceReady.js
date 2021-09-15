import useRecorder from '../useRecorder'
import useActions from '../useRecorder'
import { useEffect } from 'react'

const useOnDeviceReady = () => {
  const { player } = useRecorder()
  const { onDeviceLoaded, magnetButton } = useActions()
  useEffect(() => {
    player.on('deviceReady', onDeviceLoaded)
    player.on('deviceReady', magnetButton)
    return () => {}
  }, [player])
}
export default useOnDeviceReady

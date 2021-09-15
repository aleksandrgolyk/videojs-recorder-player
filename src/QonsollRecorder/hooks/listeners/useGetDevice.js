import useRecorder from '../useRecorder'
import { useEffect } from 'react'

const useGetDevice = (player) => {
  useEffect(() => {
    player.record().getDevice()
  }, [])

  return () => {}
}
export default useGetDevice

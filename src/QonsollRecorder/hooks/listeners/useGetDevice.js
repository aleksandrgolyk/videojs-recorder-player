import useRecorder from '../useRecorder'
import { useEffect } from 'react'

const useGetDevice = () => {
  const { player } = useRecorder()
  useEffect(() => {
    player.record().getDevice()
  }, [player])

  return () => {}
}
export default useGetDevice

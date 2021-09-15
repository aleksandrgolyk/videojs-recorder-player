import useRecorder from '../useRecorder'
import useActions from '../useRecorder'
import { useEffect } from 'react'

const useOnFinishRecord = (player) => {
  const { recordButtonsBlockDisappear } = useActions()
  useEffect(() => {
    player.on('finishRecord', recordButtonsBlockDisappear)
    return () => {}
  }, [])
}
export default useOnFinishRecord

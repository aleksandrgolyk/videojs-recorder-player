import useRecorder from '../useRecorder'
import useActions from '../useRecorder'
import { useEffect } from 'react'

const useOnFinishRecord = () => {
  const { player } = useRecorder()
  const { recordButtonsBlockDisappear } = useActions()
  useEffect(() => {
    player.on('finishRecord', recordButtonsBlockDisappear)
    return () => {}
  }, [player])
}
export default useOnFinishRecord

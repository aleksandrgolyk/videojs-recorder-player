import useCreatePlayer from './useCreatePlayer'
import {
  useEnumerateReady,
  useDeviceReady,
  useGetDevice,
  useOnDeviceReady,
  useOnFinishRecord
} from './listeners'

const useInit = (recorderId) => {
  const player = useCreatePlayer(recorderId)
  const deviceList = useEnumerateReady(player)
  useDeviceReady(player)
  useGetDevice(player)
  useOnDeviceReady(player)
  useOnFinishRecord(player)

  return [player, deviceList]
}

export default useInit

import useCreatePlayer from './useCreatePlayer'
import {
  useEnumerateReady,
  useDeviceReady,
  useGetDevice,
  useOnDeviceReady,
  useOnFinishRecord
} from './listeners'

const useInit = (recorderId, options) => {
  const player = useCreatePlayer(recorderId, options)
  const deviceList = useEnumerateReady(player)
  useDeviceReady(player)
  useGetDevice(player)
  useOnDeviceReady(player)
  useOnFinishRecord(player)

  return [player, deviceList]
}

export default useInit

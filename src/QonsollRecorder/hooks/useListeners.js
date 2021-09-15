import { useEffect, useState } from 'react'
import useRecorder from './useRecorder'
import useActions from './useRecorder'
import useCreatePlayer from './useCreatePlayer'
import useOnFinishRecord from './listeners/useOnFinishRecord'
import useOnDeviceReady from './listeners/useOnDeviceReady'
import useEnumerateReady from './listeners/useEnumerateReady'

useDeviceReady()

useEnumerateReady()
useGetDevice()

useOnDeviceReady()

useOnFinishRecord()

const useListeners = (recorderId) => {
  const player = useCreatePlayer(recorderId)
  const deviceList = useEnumerateReady(player)
  useDeviceReady(player)
  useGetDevice(player)
  useOnDeviceReady(player)
  useOnFinishRecord(player)

  return [player, deviceList]
}

export default useListeners

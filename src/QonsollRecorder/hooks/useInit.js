import { useEffect, useState } from 'react'
import videojs from 'video.js'
import useListeners from './useListeners'
import useCreatePlayer from './useCreatePlayer'

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

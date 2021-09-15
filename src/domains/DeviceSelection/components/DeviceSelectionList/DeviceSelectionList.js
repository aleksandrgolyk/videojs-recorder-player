import React from 'react'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'
import VideoSelection from '../VideoSelection'
import AudioSelection from '../AudioSelection'
import ScreenRecorder from '../ScreenRecorder'
import { useRecorder } from '../../../../QonsollRecorder/hooks'

const DeviceSelectionList = () => {
  const { deviceList, player, showDeviceSelectionList, onScreenRecord } =
    useRecorder()
  const videoDevices = deviceList.filter((item) => item.kind === 'videoinput')
  const audioDevices = deviceList.filter((item) => item.kind === 'audioinput')
  return (
    showDeviceSelectionList && (
      <StyledDeviceSelectionList>
        <VideoSelection deviceList={videoDevices} player={player} />
        <AudioSelection deviceList={audioDevices} player={player} />
        <ScreenRecorder onScreenRecord={onScreenRecord} />
      </StyledDeviceSelectionList>
    )
  )
}

export default DeviceSelectionList

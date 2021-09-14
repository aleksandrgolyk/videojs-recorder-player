import React from 'react'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'
import VideoSelection from '../VideoSelection'
import AudioSelection from '../AudioSelection'
import ScreenRecorder from '../ScreenRecorder'

const DeviceSelectionList = ({
  videoDevices,
  audioDevices,
  player,
  showDeviceSelectionList,
  onScreenRecord
}) => {
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

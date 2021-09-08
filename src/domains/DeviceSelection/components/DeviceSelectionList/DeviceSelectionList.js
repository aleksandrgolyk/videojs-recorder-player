import React from 'react'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'
import VideoSelection from '../VideoSelection'
import AudioSelection from '../AudioSelection'
import ScreenRecorder from '../ScreenRecorder'

const DeviceSelectionList = ({
  videoDevices,
  audioDevices,
  player,
  showDeviceSelectionList
}) => {
  return (
    showDeviceSelectionList && (
      <StyledDeviceSelectionList>
        <VideoSelection deviceList={videoDevices} player={player} />
        <AudioSelection deviceList={audioDevices} player={player} />
        <ScreenRecorder />
      </StyledDeviceSelectionList>
    )
  )
}

export default DeviceSelectionList

import React from 'react'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'

const DeviceSelectionList = ({ videoDevices, audioDevices, player }) => {
  return (
    <StyledDeviceSelectionList>
      <Dropdown
        deviceList={videoDevices}
        player={player}
        isVideo
        id={1}
        type={'Cs'}
      />
      <Dropdown
        deviceList={audioDevices}
        player={player}
        isAudio
        id={2}
        type={'As'}
      />
    </StyledDeviceSelectionList>
  )
}

export default DeviceSelectionList

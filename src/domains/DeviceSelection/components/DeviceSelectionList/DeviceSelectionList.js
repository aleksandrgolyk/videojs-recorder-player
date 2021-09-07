import React from 'react'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'

const DeviceSelectionList = ({ videoDevices, audioDevices }) => {
  return (
    <StyledDeviceSelectionList>
      <Dropdown isGettingDevices={videoDevices} id={1} type={'Cs'} />
      <Dropdown isGettingDevices={audioDevices} id={2} type={'As'} />
    </StyledDeviceSelectionList>
  )
}

export default DeviceSelectionList

import React from 'react'
import Dropdown from '../../../../components/Dropdown/Dropdown'
import { StyledDeviceSelectionList } from './DeviceSelection.styles'
import { faCoffee, video } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DeviceSelectionList = ({
  videoDevices,
  audioDevices,
  player,
  showDeviceSelectionList
}) => {
  return (
    showDeviceSelectionList && (
      <StyledDeviceSelectionList>
        <Dropdown
          deviceList={videoDevices}
          player={player}
          isVideo
          id={1}
          type={'Cs'}
          icon={<FontAwesomeIcon icon={'video'} />}
        />
        <Dropdown
          deviceList={audioDevices}
          player={player}
          isAudio
          id={2}
          type={'As'}
          icon={<FontAwesomeIcon icon={'microphone'} />}
        />
      </StyledDeviceSelectionList>
    )
  )
}

export default DeviceSelectionList

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'

import Dropdown from '../../../../components/Dropdown/Dropdown'

const AudioSelection = ({ deviceList, player }) => {
  return (
    <Dropdown
      deviceList={deviceList}
      player={player}
      isAudio
      id={2}
      type={'As'}
      icon={<FontAwesomeIcon icon="microphone" />}
    />
  )
}

export default AudioSelection

import React from 'react'
import { video } from '@fortawesome/fontawesome-free-solid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../../../../components/Dropdown/Dropdown'

const VideoSelection = ({ deviceList, player }) => {
  return (
    <Dropdown
      deviceList={deviceList}
      player={player}
      isVideo
      id={1}
      type={'Cs'}
      icon={<FontAwesomeIcon icon="video" />}
    />
  )
}

export default VideoSelection

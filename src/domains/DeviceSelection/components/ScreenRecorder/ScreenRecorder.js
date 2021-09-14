import React from 'react'
import { StyledScreenRecorder } from './ScreenRecorder.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScreenRecorder = ({ onScreenRecord }) => {
  return (
    <StyledScreenRecorder>
      <FontAwesomeIcon icon="desktop" onClick={onScreenRecord} />
    </StyledScreenRecorder>
  )
}

export default ScreenRecorder

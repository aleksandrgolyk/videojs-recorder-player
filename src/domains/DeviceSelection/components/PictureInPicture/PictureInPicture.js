import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledPiPButton } from './PictureInPicture.styles'

const PictureInPicture = ({ togglePip, pipEnabled }) => {
  return (
    <StyledPiPButton onClick={togglePip}>
      {pipEnabled ? (
        <FontAwesomeIcon icon={'window-restore'} />
      ) : (
        <FontAwesomeIcon icon={'window-minimize'} />
      )}
    </StyledPiPButton>
  )
}

export default PictureInPicture

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledPiPButton } from './PictureInPicture.styles'

const PictureInPicture = ({ togglePip, pipEnabled }) => {
  return (
    <StyledPiPButton onClick={togglePip}>
      {pipEnabled ? (
        <FontAwesomeIcon
          icon={'external-link-alt'}
          style={{ transform: 'rotate(270deg)' }}
        />
      ) : (
        <FontAwesomeIcon
          icon={'external-link-alt'}
          style={{ transform: 'rotate(90deg)' }}
        />
      )}
    </StyledPiPButton>
  )
}

export default PictureInPicture

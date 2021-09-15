import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledPiPButton } from './PictureInPicture.styles'
import { useRecorder } from '../../../../QonsollRecorder/hooks'

const PictureInPicture = () => {
  const [pipEnabled, setPipEnabled] = useState(false)
  const { player } = useRecorder()
  const togglePip = async () => {
    console.log(player)
    if (Object?.keys(player)?.length > 0) {
      if (
        player?.record()?.mediaElement !== document?.pictureInPictureElement
      ) {
        await player?.record()?.mediaElement?.requestPictureInPicture()
        setPipEnabled(true)
      } else {
        await document?.exitPictureInPicture()
        setPipEnabled(false)
      }
    }
  }
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

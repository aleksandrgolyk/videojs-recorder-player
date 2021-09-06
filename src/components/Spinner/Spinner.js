import React from 'react'
import { StyledSpinner, StyledSpinnerWrapper } from './Spinner.styles'

const Spinner = ({ blocks }) => {
  const blockArr = Array.from(Array(blocks).keys())
  return (
    <StyledSpinnerWrapper>
      <StyledSpinner>
        {blockArr?.map((item, index) => (
          <div></div>
        ))}
      </StyledSpinner>
    </StyledSpinnerWrapper>
  )
}

export default Spinner

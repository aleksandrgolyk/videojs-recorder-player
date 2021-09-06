import React from 'react'
import { StyledSpinner, StyledSpinnerWrapper } from './Spinner.styles'

const Spinner = () => {
  const blockArr = Array.from(Array(12).keys())
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

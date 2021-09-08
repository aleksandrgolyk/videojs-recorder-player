import styled from 'styled-components'

export const StyledPiPButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: rgba(17, 17, 17, 0.6);
  color: rgba(255, 255, 255, 1);
  box-sizing: inherit;
  &:hover,
  :focus {
    background-color: rgba(68, 56, 56, 0.6);
    color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`

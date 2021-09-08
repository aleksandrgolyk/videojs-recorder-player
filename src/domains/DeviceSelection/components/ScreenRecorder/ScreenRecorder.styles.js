import styled from 'styled-components'

export const StyledScreenRecorder = styled.div`
  background: rgba(17, 17, 17, 0.6);
  color: rgba(255, 255, 255, 1);
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;
  width: 50px;
  height: 50px;

  &:hover,
  :focus {
    background-color: rgba(68, 56, 56, 0.6);
    transform: scale(1.1);
  }
`

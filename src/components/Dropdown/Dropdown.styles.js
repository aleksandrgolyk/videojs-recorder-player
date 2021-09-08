import styled from 'styled-components'

export const StyledDropdown = styled.div`
  top: 10px;
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
`
export const StyledDropdownButton = styled.div`
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
export const StyledDropdownItem = styled.div`
  border-radius: 8px;
  cursor: pointer;
  position: absolute;
  background-color: #f1f1f1;
  max-width: 300px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 10px;
`
export const StyledDropdownItemBtn = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`

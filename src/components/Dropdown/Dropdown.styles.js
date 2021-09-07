import styled from 'styled-components'

export const StyledDropdown = styled.div`
  top: 10px;
  //& a:hover {
  //  background-color: #ddd;
`
export const StyledDropdownButton = styled.div`
  background-color: #3498db;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 10px;

  &:hover,
  :focus {
    background-color: #2980b9;
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

//
//   .dropbtn {
//     background-color: #3498db;
//     color: white;
//     padding: 16px;
//     font-size: 16px;
//     border: none;
//     cursor: pointer;
//   }
//
//   .dropbtn:hover,
//   .dropbtn:focus {
//     background-color: #2980b9;
//   }
//
//   .dropdown {
//     positieon: relative;
//     display: inline-block;
//   }
//
//   .dropdown-content {
//     display: none;
//     position: absolute;
//     background-color: #f1f1f1;
//     min-width: 160px;
//     overflow: auto;
//     box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//     z-index: 1;
//   }
//
//   .dropdown-content a {
//     color: black;
//     padding: 12px 16px;
//     text-decoration: none;
//     display: block;
//   }
//
//   .dropdown a:hover {
//     background-color: #ddd;
//   }
//
//   .show {
//     display: block;
//   }
// `

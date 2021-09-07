import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'
import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownItem,
  StyledDropdownItemBtn
} from './Dropdown.styles'

const Dropdown = ({ isGettingDevices, id, type }) => {
  const ref = useRef()
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false)

  useEffect(() => {
    const clickOutsideCheck = (e) => {
      if (
        isDropdownMenuVisible &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsDropdownMenuVisible(false)
      }
    }
    document.addEventListener('mousedown', clickOutsideCheck)
    console.log('clicked outside dropdown')
  }, [isDropdownMenuVisible])

  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  function onDropdownClick() {
    // document.getElementById(id.toString()).classList.toggle('show')
    console.log('set visible')
    !isDropdownMenuVisible
      ? setIsDropdownMenuVisible(true)
      : setIsDropdownMenuVisible(false)
  }

  function onDropdownItemClick() {
    // document.getElementById(id.toString()).classList.toggle('show')
    console.log('not visible ')
    setIsDropdownMenuVisible(false)
  }

  return (
    <StyledDropdown ref={ref}>
      <StyledDropdownButton onClick={onDropdownClick}>
        {type}
      </StyledDropdownButton>
      {isDropdownMenuVisible && (
        <StyledDropdownItem id={id}>
          {isGettingDevices?.map((device, index) => (
            <StyledDropdownItemBtn key={index} onClick={onDropdownItemClick}>
              {device.label}
            </StyledDropdownItemBtn>
          ))}
        </StyledDropdownItem>
      )}
    </StyledDropdown>
  )
}

export default Dropdown

import React, { useState, useRef, useEffect } from 'react'
import './Dropdown.css'
import {
  StyledDropdown,
  StyledDropdownButton,
  StyledDropdownItem,
  StyledDropdownItemBtn
} from './Dropdown.styles'

const Dropdown = ({ deviceList, id, type, isVideo, isAudio, player }) => {
  // console.log('videoDevices:!!!!', videoDevices)
  // console.log('videoDevices:!!!!', videoDevices)
  // console.log('deviceList', deviceList)
  const ref = useRef()
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false)

  useEffect(() => {
    //click outside Dropdown collapse it
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
  }, [isDropdownMenuVisible])

  function onDropdownClick() {
    !isDropdownMenuVisible
      ? setIsDropdownMenuVisible(true)
      : setIsDropdownMenuVisible(false)
  }

  function onDropdownItemClick(e) {
    setIsDropdownMenuVisible(false)
    // Filter all items and return clicked one
    const getCurrentitem = e?.target?.innerText
    const selectedDevice = deviceList?.filter(
      (device) => device?.label === getCurrentitem
    )
    //convert array of devices to object
    const obj = selectedDevice.reduce((prev, cur) => (prev, cur), {})
    //change video/audio input devices
    if (obj?.kind === 'videoinput') {
      player.record().setVideoInput(obj.deviceId)
    }
    if (obj?.kind === 'audioinput') player.record().setAudioInput(obj.deviceId)
  }

  return (
    <StyledDropdown ref={ref}>
      <StyledDropdownButton onClick={onDropdownClick}>
        {type}
      </StyledDropdownButton>
      {isDropdownMenuVisible && (
        <StyledDropdownItem id={id}>
          {deviceList?.map((device, index) => (
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

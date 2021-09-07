import React from 'react'

const SwitchInputDevice = ({ player }) => {
  // enumerate devices once
  player.one('deviceReady', function () {
    player.record().enumerateDevices()
  })

  player.on('enumerateReady', function () {
    const devices = player.record().devices

    // Filter out video input devices
    const videoInputDevices = devices.filter(
      ({ kind }) => kind === 'videoinput'
    )

    // change video input device
    setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId)

    console.log(videoInputDevices)

    // Add switch camera btn
    let Button = videojs.getComponent('Button')
    let SwitchCameraBtn = videojs.extend(Button, {
      constructor: function () {
        Button.apply(this, arguments)
        /* initialize your button */
        this.controlText('Switch camera')
      },
      handleClick: function () {
        // Switch camera on click
        inputDeviceIdIndex.current =
          (inputDeviceIdIndex.current + 1) % videoInputDevices.length

        setDeviceId(videoInputDevices[inputDeviceIdIndex.current].deviceId)
      },
      buildCSSClass: function () {
        return 'vjs-icon-spinner vjs-control vjs-button'
      }
    })
    videojs.registerComponent('SwitchCameraBtn', SwitchCameraBtn)

    player
      .getChild('controlBar')
      .addChild('SwitchCameraBtn', {}, player.controlBar.children().length - 2)
  })

  // error handling
  player.on('deviceError', function () {
    console.log('device error:', player.deviceErrorCode)
  })

  player.on('error', function (element, error) {
    console.error(error)
  })

  return <div></div>
}

export default SwitchInputDevice

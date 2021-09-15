import React from 'react'
import magnetButton from '../helpers/magnetButton'
import { useEffect, useState } from 'react'
import videojs from 'video.js'

const useInitPlayer = ({ options }) => {
  const [player, setPlayer] = useState({})
  const [deviceList, setDeviceDeviceList] = useState([])

  useEffect(() => {
    let player = videojs('myVideo', options, function () {})
    setPlayer(player)

    // ===== DEVICES TRACKING AND SHOW SECTION ---start ----
    // enumerate devices once
    player.one('deviceReady', function () {
      player.record().enumerateDevices()
    })
    player.on('enumerateReady', function () {
      setDeviceDeviceList(player.record().devices)
    })
    // ===== DEVICES TRACKING AND SHOW SECTION ---end ----

    // Started record devices
    player.record().getDevice()

    //Appear record button on pade load - show/hide
    player.on('deviceReady', recordButtonsBlockAppear)
    player.on('deviceReady', magnetButton)
    player.on('finishRecord', recordButtonsBlockDisappear)
  }, [])
  return <div></div>
}

export default useInitPlayer

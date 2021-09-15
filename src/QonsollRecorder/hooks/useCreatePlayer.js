import { useEffect, useState } from 'react'
import videojs from 'video.js'

const useCreatePlayer = (recorderId, options) => {
  const [player, setPlayer] = useState(null)
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let player = videojs(recorderId, options, function () {})
    setPlayer(player)
  }, [options])
  return player
}

export default useCreatePlayer

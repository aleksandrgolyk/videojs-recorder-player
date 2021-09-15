import React from 'react'
import { useRecorder } from '../../QonsollRecorder/hooks'

const ApproveButtonsBlockAdvancedView = () => {
  const {
    onDeviceLoaded,
    setShowDeviceSelectionList,
    onReplayRecord,
    onApprove,
    player
  } = useRecorder()
  return (
    <div className="approveVideoBlockWrapper">
      <div className="approveVideoBlockQuestion">Like it?</div>
      <div className="approveVideoBlockBtnGroup">
        <button className="approveVideoBlockBtn approveBtn" onClick={onApprove}>
          YES
        </button>
        <button
          className="approveVideoBlockBtn refuseBtn"
          onClick={(e) => {
            onDeviceLoaded(true)
            setShowDeviceSelectionList(true)

            player.record().getDevice()
            player?.record().reset()

            console.log('record was refused and deleted')
          }}>
          NO
        </button>
        <button
          className="approveVideoBlockBtn replayBtn"
          onClick={onReplayRecord}>
          {/*Replay*/}
        </button>
      </div>
    </div>
  )
}

export default ApproveButtonsBlockAdvancedView

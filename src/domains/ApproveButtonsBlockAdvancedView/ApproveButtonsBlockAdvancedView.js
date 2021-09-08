import React from 'react'

const ApproveButtonsBlockAdvancedView = ({
  setShowRecordButtonsBlock,
  setShowDeviceSelectionList,
  onReplayRecord,
  onApproveRecord,
  player
}) => {
  return (
    <div className="approveVideoBlockWrapper">
      <div className="approveVideoBlockQuestion">Like it?</div>
      <div className="approveVideoBlockBtnGroup">
        <button
          className="approveVideoBlockBtn approveBtn"
          onClick={onApproveRecord}>
          YES
        </button>
        <button
          className="approveVideoBlockBtn refuseBtn"
          onClick={(e) => {
            setShowRecordButtonsBlock(true)
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

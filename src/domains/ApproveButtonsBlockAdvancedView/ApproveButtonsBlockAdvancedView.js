import React from 'react'

const ApproveButtonsBlockAdvancedView = ({
  setShowRecordButtonsBlock,
  setShowDeviceSelectionList,
  onReplayRecord,
  player
}) => {
  return (
    <div className="approveVideoBlockWrapper">
      <div className="approveVideoBlockQuestion">Like it?</div>
      <div className="approveVideoBlockBtnGroup">
        <button className="approveVideoBlockBtn approveBtn">YES</button>
        <button
          className="approveVideoBlockBtn refuseBtn"
          onClick={(e) => {
            setShowRecordButtonsBlock(true)
            setShowDeviceSelectionList(true)
            player.record().getDevice()

            console.log('video was refused')
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

import React from 'react'

const RecorderWrapper = () => {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <video id="myVideo" playsInline className="video-js vjs-default-skin" />
      // separate component
      {loading ? (
        <Spinner />
      ) : (
        <>
          {showRecordButtonsBlock ? (
            <>
              <PictureInPicture player={player} />
              <RecordButtonsBlockAdvancedView
                onRecordStop={onRecordStop}
                onRecordStart={onRecordStart}
                record={record}
              />
              <DeviceSelectionList
                player={player}
                videoDevices={videoDevices}
                audioDevices={audioDevices}
                showDeviceSelectionList={showDeviceSelectionList}
                onScreenRecord={onScreenRecord}
              />
            </>
          ) : (
            <ApproveButtonsBlockAdvancedView
              player={player}
              setShowRecordButtonsBlock={setShowRecordButtonsBlock}
              setShowDeviceSelectionList={setShowDeviceSelectionList}
              onReplayRecord={onReplayRecord}
              onApproveRecord={onApproveRecord}
            />
          )}
        </>
      )}
    </div>
  )
}

export default RecorderWrapper

import React from 'react'
import PictureInPicture from '../DeviceSelection/components/PictureInPicture'

const RecordButtonsBlockAdvancedView = ({
  record,
  onRecordStop,
  onRecordStart
}) => {
  return (
    <>
      <div className="recordButtonsGroupWrapper">
        {/*<PictureInPicture pipEnabled={pipEnabled} togglePip={togglePip} />*/}
        {record ? (
          <div className="magnetWrapper">
            <button
              className="recorderButtons recorderStopButton"
              onClick={onRecordStop}
            />
          </div>
        ) : (
          <div className="magnetWrapper">
            <button
              className="recorderButtons recorderRecordButton"
              onClick={onRecordStart}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default RecordButtonsBlockAdvancedView

import React from 'react'

const RecordButtonsBlockAdvancedView = ({
  record,
  onRecordStop,
  onRecordStart
}) => {
  return (
    <>
      <div className="recordButtonsGroupWrapper">
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

import React from 'react'
import PictureInPicture from '../DeviceSelection/components/PictureInPicture'
import { useRecorder } from '../../QonsollRecorder/hooks'

const RecordButtonsBlockAdvancedView = () => {
  const { record, onStop, onStart } = useRecorder()
  return (
    <>
      <div className="recordButtonsGroupWrapper">
        {/*<PictureInPicture pipEnabled={pipEnabled} togglePip={togglePip} />*/}
        {record ? (
          <div className="magnetWrapper">
            <button
              className="recorderButtons recorderStopButton"
              onClick={onStop}
            />
          </div>
        ) : (
          <div className="magnetWrapper">
            <button
              className="recorderButtons recorderRecordButton"
              onClick={onStart}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default RecordButtonsBlockAdvancedView

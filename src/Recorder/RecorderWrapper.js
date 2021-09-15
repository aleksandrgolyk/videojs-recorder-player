import React from 'react'
import { useRecorder } from '../QonsollRecorder/hooks'
import Spinner from '../components/Spinner/Spinner'
import PictureInPicture from '../domains/DeviceSelection/components/PictureInPicture'
import RecordButtonsBlockAdvancedView from '../domains/RecordButtonsBlockAdvancedView'
import DeviceSelectionList from '../domains/DeviceSelection/components/DeviceSelectionList'
import ApproveButtonsBlockAdvancedView from '../domains/ApproveButtonsBlockAdvancedView'

const RecorderWrapper = () => {
  const { loading, showRecordButtonsBlock } = useRecorder()

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
              <PictureInPicture />
              <RecordButtonsBlockAdvancedView />
              <DeviceSelectionList />
            </>
          ) : (
            <ApproveButtonsBlockAdvancedView />
          )}
        </>
      )}
    </div>
  )
}

export default RecorderWrapper

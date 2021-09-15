import React from 'react'
import { RecorderProvider } from '../contexts'
import RecorderWrapper from '../../Recorder/RecorderWrapper'

const Recorder = () => {
  return (
    <RecorderProvider>
      <RecorderWrapper />
    </RecorderProvider>
  )
}

export default Recorder

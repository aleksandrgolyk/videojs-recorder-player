import React from 'react'
import { RecorderProvider } from '../contexts'
import RecorderWrapper from '../components/RecorderWrapper'

const Recorder = () => {
  return (
    <RecorderProvider>
      <RecorderWrapper />
    </RecorderProvider>
  )
}

export default Recorder

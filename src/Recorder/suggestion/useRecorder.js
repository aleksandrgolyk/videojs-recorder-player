import { useContext } from 'react'
import RecorderContext from './RecorderContext'

const useRecorder = () => useContext(RecorderContext)

export default useRecorder

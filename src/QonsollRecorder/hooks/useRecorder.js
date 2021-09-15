import { useContext } from 'react'
import { RecorderContext } from '../contexts'

const useRecorder = () => useContext(RecorderContext)

export default useRecorder

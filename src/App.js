import 'video.js/dist/video-js.min.css'
import 'videojs-record/dist/css/videojs.record.css'
import 'videojs-record/dist/videojs.record.js'
import './styles.css'
import Recorder from './Recorder/Recorder'

let options1 = {
  // controls: true,
  bigPlayButton: false,
  width: 800,
  height: 600,
  // loop:true,
  // fluid: true,
  autoplay: true,
  plugins: {
    record: {
      screen: true,
      audio: true, //allow record with audio
      video: false,
      maxLength: 30, //set video record duration in sec.
      displayMilliseconds: false,
      // fire the timestamp event every 5 seconds
      timeSlice: 5000,
      pip: true,
      debug: true
      // frameWidth: 640,
      // frameHeight: 480
      // frameWidth: 1280,
      // frameHeight: 960
    }
  }
}
let options2 = {
  // controls: true,
  bigPlayButton: false,
  width: 800,
  height: 600,
  // loop:true,
  // fluid: true,
  autoplay: true,
  plugins: {
    record: {
      screen: false,
      audio: true, //allow record with audio
      video: true,
      maxLength: 30, //set video record duration in sec.
      displayMilliseconds: false,
      // fire the timestamp event every 5 seconds
      timeSlice: 5000,
      pip: true,
      debug: true
      // frameWidth: 640,
      // frameHeight: 480
      // frameWidth: 1280,
      // frameHeight: 960
    }
  }
}

export default function App() {
  return (
    <>
      <Recorder id={'test1'} options={options1} />
      <Recorder id={'test2'} options={options2} />
    </>
  )
}

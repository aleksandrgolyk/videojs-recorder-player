// Required imports when recording audio-only using the videojs-wavesurfer plugin
import WaveSurfer from "wavesurfer.js";
import MicrophonePlugin from "wavesurfer.js/dist/plugin/wavesurfer.microphone.js";
// Register videojs-wavesurfer plugin
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";
import "videojs-wavesurfer/dist/videojs.wavesurfer.js";

WaveSurfer.microphone = MicrophonePlugin;

const screenDimensions = {
  // width: { min: 320, ideal: 640, max: 1080 },
  width: { min: 320, ideal: 640, max: 1080 },
  height: { min: 240, ideal: 480, max: 720 }
};

const wavesurferOptions = {
  backend: "WebAudio",
  waveColor: "#36393b",
  progressColor: "black",
  cursorWidth: 1,
  hideScrollbar: false,
  plugins: [
    WaveSurfer.microphone.create({
      bufferSize: 4096,
      numberOfInputChannels: 1,
      numberOfOutputChannels: 1,
      constraints: {
        audio: true,
        video: false
      }
    })
  ]
};

export function createRecordOptions({ audio, video, image, screen }) {
  return {
    audio,
    video: video ? screenDimensions : false,
    screen: screen ? screenDimensions : false,
    image: image ? screenDimensions : false,
    maxLength: 30 * 60,
    maxFileSize: 30 * 1000 * 1000,
    frameWidth: 320,
    frameHeight: 240
  };
}

//record for audio - wavesurfer plugin
export default function createOptions({ audio, image, screen, video }) {
  return {
    controls: true,
    bigPlayButton: false,
    controlBar: {
      fullscreenToggle: true,
      volumePanel: audio
    },
    width: 640,
    height: 480,
    // fluid: true,
    plugins: {
      wavesurfer: wavesurferOptions,
      record: createRecordOptions({ audio, video, image, screen })
    }
  };
}

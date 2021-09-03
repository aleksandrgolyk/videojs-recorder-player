import React from 'react';

export function options({audio, video}) {
  return {
    controls: true,
    bigPlayButton: false,
    width: 800,
    height: 600,
    // fluid: true,
    plugins: {
      record: {
        audio: true, //allow record with audio
        video: true,
        maxLength: 30, //set video record duration in sec.
        displayMilliseconds: false,
        // fire the timestamp event every 5 seconds
        timeSlice: 2000
      }
    }
  }
}

export default options

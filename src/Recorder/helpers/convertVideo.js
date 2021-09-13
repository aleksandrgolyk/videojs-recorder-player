import React from 'react'

function uploadToConvert({ player }) {
  player.on('finishRecord', function () {
    // console.log('finished recording: ', player.recordedData)
    var binaryData = player.recordedData
    convertVideo(binaryData, 'mp4')
  })
  const convertVideo = (blob, format) => {
    if (blob) {
      var formData = new FormData()
      formData.append('toFormat', format)
      formData.append('data', blob)
      fetch('http://34.65.15.23/convert', {
        method: 'POST',
        body: formData,
        // cache: false,
        processData: false,
        contentType: false,
        beforeSend: function () {},
        success: function (res) {},
        error: function (res) {}
      })
    } else {
    }
  }
}
export default uploadToConvert

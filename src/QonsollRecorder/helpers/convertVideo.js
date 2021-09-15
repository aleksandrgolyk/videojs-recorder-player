import { io } from 'socket.io-client'

function uploadToConvert(binaryData, format) {
  if (binaryData) {
    const socket = io('http://192.168.0.128:8080').connect()
    socket.on('connect', () => {
      const formData = new FormData()
      formData.append('toFormat', format)
      formData.append('socketId', socket.id)
      formData.append('data', binaryData)
      fetch('http://192.168.0.128:8080/convert', {
        //'http://34.65.15.23/convert'
        method: 'POST',
        body: formData,
        // cache: false,
        processData: false,
        contentType: false,
        beforeSend: function () {},
        success: function (res) {},
        error: function (res) {}
      })
    })
    socket.on('error', (err) => {
      console.log(err)
    })
    socket.on('percentage', (percent) => {
      console.log('Percent', percent)
    })
    socket.on('link', (link) => {
      console.log('link', link)
      socket.disconnect()
    })
  }
}
export default uploadToConvert

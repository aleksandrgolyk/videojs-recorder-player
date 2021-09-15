import { v4 as uuidv4 } from 'uuid'

function uploadToConvert(binaryData, format) {
  if (binaryData) {
    // const socket = io('http://localhost:8080').connect()
    // socket.on('connect', () => {
    const formData = new FormData()
    const sessionId = uuidv4()
    formData.append('toFormat', format)
    formData.append('sessionId', sessionId) // socket.id
    formData.append('data', binaryData)
    fetch('http://localhost:8080/video/upload', {
      //'http://34.65.15.23/convert'
      method: 'POST',
      body: formData,
      // cache: false,
      processData: false,
      contentType: false,
      beforeSend: function () {},
      success: function (res) {},
      error: function (res) {}
    }).then(() => {
      const eventSource = new EventSource(
        `http://localhost:8080/video/convert/${sessionId}`
      )
      eventSource.addEventListener('progress', (e) => {
        console.log('progress: ', e.data)
      })
      eventSource.addEventListener(
        'link',
        (e) => {
          console.log('link: ', e.data)
          // закрываем соединение
          eventSource.close()
          // мы можем получить такой идентификатор лишь раз
        },
        { once: true }
      )
      eventSource.addEventListener(
        'error',
        (e) => {
          console.log('error: ', e)
          // закрываем соединение
          eventSource.close()
          // мы можем получить такой идентификатор лишь раз
        },
        { once: true }
      )
    })

    // })
    // socket.on('error', (err) => {
    //   console.log(err)
    // })
    // socket.on('percentage', (percent) => {
    //   console.log('Percent', percent)
    // })
    // socket.on('link', (link) => {
    //   console.log('link', link)
    //   socket.disconnect()
    // })
  }
}
export default uploadToConvert

const Stream = require('node-rtsp-stream')
const readline = require('readline');
const prompt = require('prompt');




const schema = {
  properties: {
    rtspStreamUrl: {
      message: 'enter rtsp server url: ',
      default: 'rtsp://127.0.0.1:8554/',
      // default: 'rtsp://localhost:8554/',
    },
    websocketPort: {
      message: 'enter websocket output port: ',
      default: 9999,
      type: 'integer',
    },
  }
}

prompt.get(schema, (err, result) => {
  if (err) {
    console.error(err);
  }
  console.info(result);

  const {rtspStreamUrl, websocketPort} = result;

  stream = new Stream({
    name: 'name_f',
    streamUrl: rtspStreamUrl,
    wsPort: websocketPort,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30,
      '-s': '720x480',
      // '': '',
    }
  })
})




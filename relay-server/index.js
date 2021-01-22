const Stream = require('node-rtsp-stream')
const readline = require('readline');
const prompt = require('prompt');

const staticServer = require('./staticServer')

staticServer.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

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
    quality: {
      message: 'select stream quality: (<=1 : low , 2 : medium , >=3 : high) ',
      default: 2,
      type: 'integer',
    },
  }
}

prompt.get(schema, (err, result) => {
  if (err) {
    console.error(err);
  }
  console.info(result);

  const {rtspStreamUrl, websocketPort, quality} = result;

  let size = '1024x640';
  if (quality <= 1) size = '800x500';
  if (quality >= 3) size = '1440x900';

  stream = new Stream({
    name: 'name_f',
    streamUrl: rtspStreamUrl,
    wsPort: websocketPort,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30,
      '-s': '1440x900',
      // '': '',
    }
  })
})




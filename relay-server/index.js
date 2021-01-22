// const Stream = require('node-rtsp-stream-es6')

// const options = {
//   name: 'streamName',
//   url: 'rtsp://127.0.0.1:5554/stream1',
//   port: 5000,
//   // ffmpeg
// }

// stream = new Stream(options)

// stream.start()
Stream = require('node-rtsp-stream')
stream = new Stream({
  name: 'name_f',
  streamUrl: 'rtsp://127.0.0.1:8554/',
  // streamUrl: 'rtsp://localhost:8989/',
  // streamUrl: 'video.mp4',
  wsPort: 9999,
  ffmpegOptions: { // options ffmpeg flags
    // '-i': 'video.mp4',
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-s': '720x480',
    // '': '',
  }
})
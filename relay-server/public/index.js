
var isInitialized = false;
var isConnectionEstablished = false;
var player;

const controlButton = document.getElementById('control-button');
const buttonIcon = document.getElementById('button-icon');
const messageBox = document.getElementById('message-div');

const playIcon = '<i class="fa fa-play"></i>';
const pauseIcon = '<i class="fa fa-pause"></i>';

controlButton.onclick = () => {
  if (!isInitialized) {
    isInitialized = true;
    messageBox.style.opacity = 1;
    messageBox.textContent = 'Connecting...';
    var canvas = document.getElementById('video-canvas');
    canvas.style.width = '600px';
    var url = 'ws://localhost:9999/';
    player = new JSMpeg.Player(url, {canvas: canvas});
    player.source.onEstablishedCallback = () => {
      messageBox.textContent = 'Websocket server connection established.';
      isConnectionEstablished = true;
      console.log('ssss');
    };
    window.canvasPlayer = player;
    controlButton.innerHTML = pauseIcon;
  }
  else if (player) {
    if (player.isPlaying) {
      player.pause();
      controlButton.innerHTML = playIcon;
    }
    else {
      player.play();
      controlButton.innerHTML = pauseIcon;
    }
  }
  
}

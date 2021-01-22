import React, { useEffect, useRef, useState } from "react";

import JSMpeg from "jsmpeg-player";
import Volume from './Volume';

import { Button, Grid } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import VolumeUp from '@material-ui/icons/VolumeUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [vol, setVol] = React.useState(100);
  const playerRef = useRef(null);

  useEffect(() => {
    let videoUrl = "ws://localhost:9999/";
    let videoWrapper = document.getElementById("videoWrapper");
    playerRef.current = new JSMpeg.VideoElement(videoWrapper, videoUrl);
    setIsPlaying(true);
  }, []);

  

  const handlePause = () => {
    if(playerRef.current.player.isPlaying) {
      playerRef.current?.pause();
      setIsPlaying(false);
    } else {
      playerRef.current?.play();
      setIsPlaying(true);
    }
  }
  const handleVolChange = (event, newValue) => {
    playerRef.current?.player.setVolume(newValue/100)
    setVol(newValue);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if(isFullScreen) {
    return (
      <div>
        <Grid container direction="column">
          <Grid container item xs justify="center">
          <div id="videoWrapper" style={{ width: "100%", height: "715px"}} />
          </Grid>
          <Grid container item xs direction="row" justify="center">
            <Grid item xs={1}>
              <Button fullWidth onClick={() => handlePause()}>{isPlaying ? <PauseIcon/>: <PlayArrowIcon/>}</Button>
            </Grid>
            <Grid item xs>
              <div style={{ width: "200px"}}>
                <Grid container spacing={1}  style={{ marginTop: "2px"}}>
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                  <Grid item xs>
                    <Slider value={vol} onChange={handleVolChange} aria-labelledby="continuous-slider" />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth onClick={() => handleFullScreen()}>{<FullscreenIcon />}</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Grid container direction="column" style={{ marginTop: "50px" }}>
          <Grid container item xs justify="center">
            <div id="videoWrapper" style={{ width: "1000px", height: "600px" }} />
            </Grid>
          <Grid container item xs direction="row" justify="center">
            <Grid item xs={1} style={{marginLeft: "45px"}}>
              <Button fullWidth onClick={() => handlePause()}>{isPlaying ? <PauseIcon/>: <PlayArrowIcon/>}</Button>
            </Grid>
            <Grid item xs={6}>
              <div style={{ width: "200px"}}>
                <Grid container spacing={1}  style={{ marginTop: "2px"}}>
                  <Grid item>
                    <VolumeUp />
                  </Grid>
                  <Grid item xs>
                    <Slider value={vol} onChange={handleVolChange} aria-labelledby="continuous-slider" />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={1} style={{marginRight: "45px"}}>
              <Button fullWidth onClick={() => handleFullScreen()}>{<FullscreenIcon />}</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

  }

export default Player;

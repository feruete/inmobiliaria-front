import React from "react";
import "../hero/hero.css";
import { Button, Typography } from "@mui/material";
import video from "../hero/images/video.mp4";

const Hero = () => {
  return (
    <div class="containerHero">
      <div className="content">
        <Typography variant="h2" component="h5" id="h1">
          Bienvenidos
        </Typography>
        <Button variant="outlined" id="button" href="www.google.com">
          Contactanos
        </Button>
      </div>
      <div className="satinado">
        <video src={video} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Hero;

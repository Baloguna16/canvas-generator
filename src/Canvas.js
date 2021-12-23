import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Defaults from './Defaults.json';
import SwapForm from './SwapForm';

const composeAttributes = (mint) => {
  let attributes = Defaults;

  attributes.hat.src = `static/assets/hat-${mint.hat}.png`;
  attributes.body.src = `static/assets/body-${mint.body}.png`;
  attributes.eyes.src = `static/assets/eyes-${mint.eyes}.png`;
  attributes.mouth.src = `static/assets/mouth-${mint.mouth}.png`;
  attributes.accessory.src = `static/assets/accessory-${mint.accessory}.png`;
  attributes.background.src = `static/assets/background-${mint.background}.png`;

  return attributes;
}

const Canvas = ({ mint }) => {

  // You can change the demo canvas by changing the src[string] on attrs
  // attrs.[object].width, .height, .offsetX, .offsetY should not change.


  const history = useHistory();
  const canvasRef = useRef();

  const [hat, setHat] = useState(mint.hat);
  const [body, setBody] = useState(mint.body);
  const [eyes, setEyes] = useState(mint.eyes);
  const [mouth, setMouth] = useState(mint.mouth);
  const [accessory, setAccessory] = useState(mint.accessory);
  const [background, setBackground] = useState(mint.background);

  const attrs = composeAttributes({ hat, body, eyes, mouth, accessory, background });

  const draw = (ctx, attrs, frameCount) => {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const scale = ctx.canvas.width / 40;

    const backgroundSprite = new Image();
    const hatSprite = new Image();
    const bodySprite = new Image();
    const eyesSprite = new Image();
    const mouthSprite = new Image();
    const accessorySprite = new Image();

    backgroundSprite.src = attrs.background.src;
    hatSprite.src = attrs.hat.src;
    bodySprite.src = attrs.body.src;
    eyesSprite.src = attrs.eyes.src;
    mouthSprite.src = attrs.mouth.src;
    accessorySprite.src = attrs.accessory.src;


    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      backgroundSprite,
      attrs.background.width * frameCount,
      0,
      attrs.background.width,
      attrs.background.height,
      attrs.background.offsetX * scale,
      attrs.background.offsetY * scale,
      attrs.background.width * scale,
      attrs.background.height * scale
    );

    ctx.drawImage(
      bodySprite,
      attrs.body.width * frameCount,
      0,
      attrs.body.width,
      attrs.body.height,
      attrs.body.offsetX * scale,
      attrs.body.offsetY * scale,
      attrs.body.width * scale,
      attrs.body.height * scale
    );

    ctx.drawImage(
      hatSprite,
      attrs.hat.width * frameCount,
      0,
      attrs.hat.width,
      attrs.hat.height,
      attrs.hat.offsetX * scale,
      attrs.hat.offsetY * scale,
      attrs.hat.width * scale,
      attrs.hat.height * scale
    );

    ctx.drawImage(
      eyesSprite,
      attrs.eyes.width * frameCount,
      0,
      attrs.eyes.width,
      attrs.eyes.height,
      attrs.eyes.offsetX * scale,
      attrs.eyes.offsetY * scale,
      attrs.eyes.width * scale,
      attrs.eyes.height * scale
    );

    ctx.drawImage(
      mouthSprite,
      attrs.mouth.width * frameCount,
      0,
      attrs.mouth.width,
      attrs.mouth.height,
      attrs.mouth.offsetX * scale,
      attrs.mouth.offsetY * scale,
      attrs.mouth.width * scale,
      attrs.mouth.height * scale
    );

    ctx.drawImage(
      accessorySprite,
      attrs.accessory.width * frameCount,
      0,
      attrs.accessory.width,
      attrs.accessory.height,
      attrs.accessory.offsetX * scale,
      attrs.accessory.offsetY * scale,
      attrs.accessory.width * scale,
      attrs.accessory.height * scale
    );
  }

  const downloadPixelnaut = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = 'demo-pixelnaut-pfp.png';
    link.href = url;
    link.click();
  }

  const sharePixelnaut = () => {
    history.push(`/share/${body}/${hat}/${mouth}/${eyes}/${accessory}/${background}`);
  }

  useEffect(() => {
    let animationFrameCount = 0;
    let animationFrameId;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = () => {
      setTimeout(() => {
        animationFrameCount++;
        draw(context, attrs, animationFrameCount % 10); // keeps frameCount between 0 and 10.

        animationFrameId = window.requestAnimationFrame(render);
      }, 400); // use this to change the pace of the gif
    }

    render();

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [draw])

  // <canvas> auto-resizes to fit the parent div
  return (
    <Grid
      container
      direction="row"
      spacing={2}
    >
      <Typography
        variant="h4"
        align="center"
      >
        Pixelnauts #{mint.num}
      </Typography>
      <Grid item sx={6}>
        <canvas ref={canvasRef} width='400' height='400'></canvas>
      </Grid>
      <Grid item sx={6}>
        <SwapForm
          setHat={setHat}
          setEyes={setEyes}
          setMouth={setMouth}
          setAccessory={setAccessory}
          setBackground={setBackground}
          defaultHat={mint.hat}
          defaultEyes={mint.eyes}
          defaultMouth={mint.mouth}
          defaultAccessory={mint.accessory}
          defaultBackground={mint.background}
        />
      </Grid>
      <Button
        variant="outlined"
        onClick={downloadPixelnaut}
        fullWidth={true}
      >
        Download THIS PIXELNAUT!
      </Button>
      <Button
        variant="outlined"
        onClick={sharePixelnaut}
        fullWidth={true}
      >
        Share
      </Button>
    </Grid>
  );
}

export default Canvas;

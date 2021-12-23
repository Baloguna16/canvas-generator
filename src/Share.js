import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import Defaults from './Defaults.json';

const composeAttributes = (mint) => {
  let attributes = Defaults;

  attributes.hat.src = `/static/assets/hat-${mint.hat}.png`;
  attributes.body.src = `/static/assets/body-${mint.body}.png`;
  attributes.eyes.src = `/static/assets/eyes-${mint.eyes}.png`;
  attributes.mouth.src = `/static/assets/mouth-${mint.mouth}.png`;
  attributes.accessory.src = `/static/assets/accessory-${mint.accessory}.png`;
  attributes.background.src = `/static/assets/background-${mint.background}.png`;

  return attributes;
}

const Share = () => {
  const canvasRef = useRef();

  const params = useParams();
  const attrs = composeAttributes(params);

  console.log(params)

  const draw = (ctx, attrs, frameCount) => {

    const scale = ctx.canvas.width / 40;

    const hatSprite = new Image();
    const bodySprite = new Image();
    const eyesSprite = new Image();
    const mouthSprite = new Image();
    const accessorySprite = new Image();
    const backgroundSprite = new Image();

    hatSprite.src = attrs.hat.src;
    bodySprite.src = attrs.body.src;
    eyesSprite.src = attrs.eyes.src;
    mouthSprite.src = attrs.mouth.src;
    accessorySprite.src = attrs.accessory.src;
    backgroundSprite.src = attrs.background.src;


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
  }, [draw, attrs])

  // <canvas> auto-resizes to fit the parent div
  return (
    <canvas ref={canvasRef} width='400' height='400'></canvas>
  );
}

export default Share;

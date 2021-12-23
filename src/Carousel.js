import { useState, useEffect } from 'react';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Typography from '@mui/material/Typography';

import { styled } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Canvas from './Canvas';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Carousel = ({ mints }) => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const prevSlide = () => setCurrent(current === 0 ? mints.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === mints.length - 1 ? 0 : current + 1);

  if (!Array.isArray(mints) || mints.length <= 0) return null;

  return (
    <div>
      <div className="container">
        <div className="carousel carousel-style item-center">
          {mints.map((mint, index) => (
            <div className={index === current ? 'slide active': 'slide'} key={index}>
              {index === current && <img src={mint.image} className='image' alt={`Orcanauts #${mint.num}`} />}
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="item">
          <ArrowCircleLeftOutlinedIcon className="carousel-cursor" onClick={prevSlide} />
        </div>
        <div className="item">
          <Button onClick={handleOpen}>Pixelate Orcanaut</Button>
        </div>
        <div className="item">
          <ArrowCircleRightOutlinedIcon className="carousel-cursor" onClick={nextSlide} />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Canvas mint={mints[current]}/>
        </Box>
      </Modal>
    </div>
  );
}

export default Carousel;

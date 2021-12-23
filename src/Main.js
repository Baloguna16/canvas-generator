import { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Main = () => {
  const [mints, setMints] = useState([]);

  useEffect(() => {
    setMints([
      {
        image: 'static/demos/test-1.png',
        num: 9727,
        background: 'basic_coral',
        body: 'pink',
        hat: 'audius_headphones',
        eyes: 'glittery',
        accessory: 'scallop',
        mouth: 'smile'
      },
      {
        image: 'static/demos/test-2.png',
        num: 2186,
        background: 'basic_honey',
        body: 'yellow',
        hat: 'baseball_cap',
        eyes: 'mischevous',
        accessory: 'hog_pet',
        mouth: 'basic'
      },
      {
        image: 'static/demos/test-3.png',
        num: 1328,
        background: 'basic_lagoon',
        body: 'blue',
        hat: 'none',
        eyes: 'socn_snorkel',
        accessory: 'kelp',
        mouth: 'frown'
      }
    ])
  }, [])

  return (
    <Carousel mints={mints} />
  );
}

export default Main;

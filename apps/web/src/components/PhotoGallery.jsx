import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/03e4c8cdc1e7616ea93fc8b1504b3109.png',
    alt: 'Khövsgöl Lake with white gers along the shore'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/d4463c80c649dbdc3c5c4bce32084c51.png',
    alt: 'Crystal clear blue waters of Khövsgöl Lake'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/fc618c59973885b3df5801cff1f208e7.png',
    alt: 'Karakorum temple complex with traditional architecture'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/31ecc1cc4c558797a6bb431015dee299.png',
    alt: 'Tibetan Buddhist temple interior details'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/670a4a182f9ffdf5cfea739c0b65088d.png',
    alt: 'Reindeer herder child holding a Welcome to Mongolia sign'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/01a9798efad667f13cf945fb9b4555c9.png',
    alt: 'Mongolian nomadic herder riding with horses in the steppe'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/ef3ea23a3e76670cacaedcc0fb381c11.png',
    alt: 'Traditional eagle hunting experience in the mountains'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/9982f88b50566606ef3204f76444aee9.png',
    alt: 'Bactrian camels resting in the Gobi Desert'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/a211d0fe5acec1e81101477be1457301.png',
    alt: 'Scenic landscape of Terelj National Park'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/3f2a27b4e3743bd67fa50a31613bff1e.png',
    alt: 'Historical Karakorum temple structures'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/6805d8fddbb5c2dc9686d04cc6bbcd2c.png',
    alt: 'Altai Mountains landscape with horses grazing on grassland with glacier and snow-capped peaks'
  },
  {
    src: 'https://horizons-cdn.hostinger.com/6b2d37db-7636-43b9-9df0-f1287574ffc7/44d1ef2260f4efa0b1052307966d9896.png',
    alt: 'Traditional Mongolian music performance inside a ger with musicians in traditional clothing playing instruments'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function PhotoGallery() {
  return (
    <motion.div 
      className="gallery-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {images.map((image, index) => (
        <motion.div 
          key={index} 
          className="gallery-item"
          variants={itemVariants}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
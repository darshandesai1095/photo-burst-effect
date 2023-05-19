import { useEffect, useState } from 'react';
import './App.css';
import images from './images.js'
import { motion, useScroll, useTransform } from 'framer-motion'
import ImageCard from './components/ImageCard/ImageCard';
import Description from './components/Description/Description';
import { motion, useScroll } from 'framer-motion'

const App = () => {

  const l = images.length

  const imageStack = images.map( (img, i) => {
    return (
      <ImageCard
        src={img.src}
        i={i}
        l={l}
      />
    )
  })

  return (
    <div className="App">
      <div className="main-content">

        <div className='flex-left'>
          
        </div>

        <div className='flex-center'>
          {imageStack}
        </div>

        <div className='flex-right'>
          <Description 
              
          />
        </div>

      </div>
    </div>
  );
}

export default App;

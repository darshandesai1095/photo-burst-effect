import { useEffect, useState } from 'react';
import './App.css';
import images from './images.js'
import { motion, useScroll, useTransform } from 'framer-motion'
import ImageCard from './components/ImageCard/ImageCard';
import Description from './components/Description/Description';
import DescriptionStack from './components/DescriptionStack/DescriptionStack';


const App = () => {

  const l = images.length

  // const { scrollYProgress } = useScroll()
  // const activeImage = useTransform(scrollYProgress, (value) => {
  //   const fraction = 1/l // switch with props
  //   const activeImageNo = Math.floor(value/fraction)
  //   console.log(activeImageNo)
  //   return activeImageNo
  // })

  const imageStack = images.map( (img, i) => {
    return (
      <ImageCard
        key={i}
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
          <div></div>
          <div></div>
          <div className='flex-right__description'><DescriptionStack/></div>
          {/* <DescriptionStack/> */}
        </div>

      </div>
    </div>
  );
}

export default App;

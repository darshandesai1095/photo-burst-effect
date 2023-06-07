import { useState, useEffect, useMemo } from 'react';
import './ImageCard.css';
import { motion, useScroll, useTransform } from 'framer-motion'

const ImageCard = ({ src, i, l  }) => {

    const { scrollYProgress } = useScroll()
    const [currentIndex, setCurrentIndex] = useState(0)
  
    useEffect(() => {
      const getCurrentIndex = () => {
        const fraction = 1/l // switch with props
        const activeImageNo = Math.floor(scrollYProgress.current/fraction)
        setCurrentIndex(activeImageNo)
      }
  
      window.addEventListener('scroll', getCurrentIndex)
  
      return () => {
        window.removeEventListener('scroll', getCurrentIndex)
      }
    }, [scrollYProgress])

    // if scrollYProgress is current, initial opacity = 1
    // => if scrollYProgress is 0.9*previous, opacity begins to increase

    const scale   = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [1-(i*1/l), 1, 3])
    const opacity = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [0.1, 1.2, 0]) // 0.1 should scale with l
    const yOffset = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [-i*l/4, 0, 0]) // -i*10 should scale with l
    const blur    = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [0, 0, 0])

    const rotation = useMemo(() => {
       return (Math.floor(Math.random()*31) - 15)
    }, [])


    return (
        <>
            <motion.img 
                src={src}
                style={{
                    scale: scale,
                    opacity: opacity,
                    y: yOffset,
                    zIndex: -i,
                    rotateZ: rotation,
                    filter: `blur(${blur}px)`
                }}
            />
        </>
    );
}

export default ImageCard;
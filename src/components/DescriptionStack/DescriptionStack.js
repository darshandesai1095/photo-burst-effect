import { useEffect, useState, useMemo } from 'react';
import './DescriptionStack.css';
import { motion, useScroll, useTransform } from 'framer-motion'
import images from '../../images';
import Typewriter from '../../Effects/Typewriter/Typewriter';

const DescriptionStack = ({}) => {

    const l = images.length
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

    
    return (
        <>
            <Typewriter
                index={currentIndex}
            />
        </>
    )
}

export default DescriptionStack
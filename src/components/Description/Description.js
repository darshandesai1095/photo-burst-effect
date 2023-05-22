import { useEffect, useState, useMemo } from 'react';
import './Description.css';
import { motion, useScroll, useTransform } from 'framer-motion'
import images from '../../images';

const Description = ({description, i, l}) => {

    const { scrollYProgress } = useScroll()
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(scrollYProgress.current)
      }

      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])

    const prevDescription = i > 0 ? images[i-1].description : null
    const nextDescription = i < images.length-1 ? images[i+1].description : null

    const start = i/l
    const end = (i+1)/l

    return (
        <motion.div 
            className={`description ${scrollY >= start && scrollY <= end ? "description--visible" : "description--hidden"}`}
        >
            <h4 className='description__heading'>Description</h4>
            <p className='description__main'>
                {images[i].description}
            </p>
        </motion.div>
    );
}

export default Description;
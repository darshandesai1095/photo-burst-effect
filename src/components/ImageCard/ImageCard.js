import { useMemo } from 'react';
import './ImageCard.css';
import { motion, useScroll, useTransform } from 'framer-motion'

const ImageCard = ({ src, i, l }) => {

    const { scrollYProgress } = useScroll()

    // if scrollYProgress is current, initial opacity = 1
    // => if scrollYProgress is 0.9*previous, opacity begins to increase

    const scale   = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [1-(i*1/l), 1, 4])
    const opacity = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [0.1, 1.1, -0.4]) // 0.1 should scale with l
    const yOffset = useTransform(scrollYProgress, [0.99*((i-1)/l), i/l, (i+1)/l], [-i*l/4, 0, 0]) // -i*10 should scale with l

    const rotation = useMemo(() => {
       return (Math.floor(Math.random()*41) - 10)
    }, [])


    return (
        <>
            <motion.img 
                src={src}
                className="image-card"
                style={{
                    scale: scale,
                    opacity: opacity,
                    y: yOffset,
                    zIndex: -i,
                    rotateZ: rotation
                }}
            />
        </>
    );
}

export default ImageCard;

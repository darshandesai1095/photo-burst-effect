import React, { useState, useEffect } from 'react'
import images from '../../images'

const Typewriter = ({ index }) => {
    
  const [currentText, setCurrentText] = useState()

  useEffect(() => {
        setCurrentText("")
        let cursorIndex = 0
        let currentTimeout

        const writeText = () => {
            const text = images[index]?.description || ''
            if (cursorIndex < text.length) {
                cursorIndex +=1
                setCurrentText(prev => prev + text[cursorIndex-1])
                currentTimeout = setTimeout(writeText, 15)
            } else {
                clearTimeout(currentTimeout)
            }
        }

        //deleteText()
        writeText()

        return () => {
        clearTimeout(currentTimeout)
        }
    }, [index])

    return (
        <div>
            {currentText}
        </div>
    )
}

export default Typewriter

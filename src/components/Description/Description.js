import { useEffect, useState } from 'react';
import './Description.css';
import { motion, useScroll, useTransform } from 'framer-motion'

const Description = ({ i, description }) => {

  return (
    <div className="description">
        <h4>Prompt:</h4>
        <p>
            Velit ea officia minim culpa. Commodo consequat 
            commodo mollit culpa incididunt reprehenderit 
            eiusmod id. Elit labore voluptate cupidatat 
            excepteur sint do elit sunt magna cupidatat nulla. 
            Veniam pariatur magna ipsum ut tempor duis non 
            exercitation consequat ex fugiat irure. Minim 
            ipsum sint eu sint non fugiat.
        </p>
    </div>
  );
}

export default Description;

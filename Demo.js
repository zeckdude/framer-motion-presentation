import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled'

// https://www.framer.com/api/motion/animation/#target-object

const Demo = () => {
  return (
    <motion.div
      style={{
        backgroundColor: '#4682b4',
        width: '100px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
      }}
      initial={{
        x: 0,
        rotate: 0,
      }}
      animate={{
        backgroundColor: '#ffc0cb',
        x: 400,
        rotate: 360,
      }}
      transition={{
        ease: 'easeInOut',
        delay: 2,
        duration: 1
      }}
    >
      Woah
    </motion.div>
  );
}

export default Demo;
import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled'

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
        backgroundColor: '#4682b4',
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
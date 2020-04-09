import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled'

const MotionBox = styled(motion.div)`
  background-color: #4682b4;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
`

// https://www.framer.com/api/motion/animation/#propagation

const variants = {
  start: {
    x: 0,
    rotate: 0,
  },
  finish: {
    backgroundColor: '#ffc0cb',
    x: 400,
    rotate: 360,
  }
};

const nestedVariants = {
  start: {
    rotate: 0,
  },
  finish: {
    backgroundColor: '#4e95e2',
    rotate: -1440,
  }
};

const Demo = () => {
  return (
    <MotionBox
      variants={variants} 
      initial="start"
      animate="finish"
      transition={{
        ease: 'easeInOut',
        delay: 2,
        duration: 1
      }}
    >
      <MotionBox
        style={{
          width: '50%',
          height: '50%',
          backgroundColor: '#ffff31'
        }}
        variants={nestedVariants} 
        transition={{
          ease: 'easeInOut',
          duration: 2
        }}
      />
    </MotionBox>
  );
}

export default Demo;
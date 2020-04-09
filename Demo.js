import React, { useState } from 'react';
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
  cursor: pointer;
`

// https://www.framer.com/api/motion/animation/#variants

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

const Demo = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  return (
    <MotionBox
      variants={variants}
      initial="start"
      animate={isAnimationActive ? 'finish' : 'start'}
      transition={{
        ease: 'easeInOut',
        duration: 0.7
      }}
      onClick={() => setIsAnimationActive(prevValue => !prevValue)}
    >
      Woah
    </MotionBox>
  );
}

export default Demo;
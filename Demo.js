import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

// https://www.framer.com/api/motion/animate-presence/

const variants = {
  start: {
    x: 0,
    rotate: 0,
    opacity: 0,
  },
  mount: {
    backgroundColor: '#ffc0cb',
    x: 400,
    rotate: 360,
    opacity: 1,
  },
  unmount: {
    backgroundColor: '#4682b4',
    x: 0,
    rotate: 0,
    opacity: 0,
  }
};


const Demo = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(prevValue => !prevValue)}>Toggle</button>
      <AnimatePresence initial={false}>
        {isVisible && (
          <MotionBox
            variants={variants}
            initial="start"
            animate="mount"
            exit="unmount"
            transition={{
              ease: 'easeInOut',
              duration: 0.7
            }}
          >
            Damn it Chris
          </MotionBox>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Demo;
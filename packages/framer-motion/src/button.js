import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../../button/src/button'

const FramerMotionButton = ({ children }) => {
  // FIX: framer motion doesn't work..
  return (
    <Button as={motion.button} drag>
      {children}
    </Button>
  )
}

export default FramerMotionButton

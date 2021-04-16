import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '../../button/src/button'

const FramerMotionButton = ({ children }) => {
  const Component = React.forwardRef((props, ref) => (
    <MotionButton ref={ref}>{children}</MotionButton>
  ))

  const MotionComponent = motion(Component)

  // FIX: framer motion doesn't work..
  return <MotionComponent />
}

const MotionButton = styled(Button)`
  background-color: peachpuff;
  color: navy;

  &:hover {
    background-color: hotpink;
  }
`

export default FramerMotionButton

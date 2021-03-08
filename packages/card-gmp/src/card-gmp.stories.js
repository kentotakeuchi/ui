import CardGMP from './card-gmp'
import { text, boolean } from '@storybook/addon-knobs'
import ButtonFM from '../../button-fm/src/button-fm'

export default {
  component: CardGMP,
  title: 'Glassmorphism/Card'
}

export const primary = ({ children }) => <CardGMP>{children}</CardGMP>
export const primaryWithButtonFM = () => (
  <CardGMP>
    <ButtonFM drag>Drag</ButtonFM>
  </CardGMP>
)

// addon-knobs
export const Knobs = () => <CardGMP>{text('Label', 'CardGMP Label')}</CardGMP>

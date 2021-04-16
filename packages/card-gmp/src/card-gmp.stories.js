import CardGMP from './card-gmp'
import { text, boolean } from '@storybook/addon-knobs'
import Button from '../../button/src/button'

export default {
  component: CardGMP,
  title: 'Glassmorphism/Card'
}

export const primary = ({ children }) => <CardGMP>{children}</CardGMP>
export const primaryWithButton = () => (
  <CardGMP>
    <Button>GMP</Button>
  </CardGMP>
)

// addon-knobs
export const Knobs = () => <CardGMP>{text('Label', 'CardGMP Label')}</CardGMP>

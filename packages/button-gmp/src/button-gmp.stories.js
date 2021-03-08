import { ButtonGMP } from './button-gmp'
import { text } from '@storybook/addon-knobs'

export default {
  component: ButtonGMP,
  title: 'Glassmorphism/Button'
}

export const primary = () => <ButtonGMP label='primary' bgColor='rgb(255, 59, 48)' />
export const secondary = () => <ButtonGMP label='secondary' bgColor='rgb(0, 122, 255)' />
export const tertiary = () => <ButtonGMP label='tertiary' bgColor='rgb(52, 199, 89)' />

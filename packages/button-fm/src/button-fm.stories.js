import ButtonFM from './button-fm'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  component: ButtonFM,
  title: 'Framer Motion/Button'
}

export const primary = () => <ButtonFM drag>{'Primary'}</ButtonFM>
export const secondary = () => <ButtonFM>{'Secondary'}</ButtonFM>
export const success = () => <ButtonFM>{'Success'}</ButtonFM>
export const danger = () => <ButtonFM>{'Danger'}</ButtonFM>

// addon-console
export const Log = () => <ButtonFM onClick={() => console.log('ButtonFM Clicked')}>Log</ButtonFM>

// addon-knobs
export const Knobs = () => (
  <ButtonFM disabled={boolean('Disabled', false)}>{text('Label', 'ButtonFM Label')}</ButtonFM>
)

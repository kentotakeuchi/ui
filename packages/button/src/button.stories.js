import Button from './button'
// import Center from '../../center/src/center'
import { text, boolean } from '@storybook/addon-knobs'

export default {
  component: Button,
  title: 'Demo/Button'
  // decorators: [story => <Center>{story()}</Center>] // local decorator
}

export const primary = () => <Button>{'Primary'}</Button>
export const secondary = () => <Button>{'Secondary'}</Button>
export const success = () => <Button>{'Success'}</Button>
export const danger = () => <Button>{'Danger'}</Button>

// addon-console
export const Log = () => <Button onClick={() => console.log('Button Clicked')}>Log</Button>

// addon-knobs
export const Knobs = () => (
  <Button disabled={boolean('Disabled', false)}>{text('Label', 'Button Label')}</Button>
)

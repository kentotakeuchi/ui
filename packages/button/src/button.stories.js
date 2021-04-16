import Button from './button'
// import { text, boolean } from '@storybook/addon-knobs'

export default {
  component: Button,
  title: 'Demo/Button'
}

export const fill = () => <Button variant='fill'>{'FILL'}</Button>
export const outline = () => <Button variant='outline'>{'OUTLINE'}</Button>
export const ghost = () => <Button variant='ghost'>{'GHOST'}</Button>

// // addon-console
// export const Log = () => <Button onClick={() => console.log('Button Clicked')}>Log</Button>

// // addon-knobs
// export const Knobs = () => (
//   <Button disabled={boolean('Disabled', false)}>{text('Label', 'Button Label')}</Button>
// )

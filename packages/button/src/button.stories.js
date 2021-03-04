import Button from './button'
// import Center from '../../center/src/center'

export default {
  component: Button,
  title: 'Demo/Button'
  // decorators: [story => <Center>{story()}</Center>] // local decorator
}

export const primary = () => <Button>{'Primary'}</Button>
export const secondary = () => <Button>{'Secondary'}</Button>
export const success = () => <Button>{'Success'}</Button>
export const danger = () => <Button>{'Danger'}</Button>

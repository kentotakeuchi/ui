import Button from './button'

export default {
  component: Button,
  title: 'Design System/Button'
}

export const primary = () => <Button>{'Primary'}</Button>
export const secondary = () => <Button>{'Secondary'}</Button>
export const success = () => <Button>{'Success'}</Button>
export const danger = () => <Button>{'Danger'}</Button>

import Background from './background'

export default {
  component: Background,
  title: 'Demo/Background'
}

export const primary = ({ children }) => <Background>{children}</Background>

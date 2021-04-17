import '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import './global.css'
import { CenterX } from '../packages/center/src/center.stories'

// global decorator
export const decorators = [
  Story => (
    <CenterX>
      <Story />
    </CenterX>
  )
]

// viewport
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS // newViewports would be an ViewportMap. (see below for examples)
    // defaultViewport: 'someDefault'
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'rgb(242, 242, 247)'
      },
      {
        name: 'dark',
        value: 'rgb(28, 28, 30)'
      },
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  },
  actions: { argTypesRegex: '^on[A-Z].*' }
}

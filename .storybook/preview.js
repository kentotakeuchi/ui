import { CenterX } from '../packages/center/src/center.stories'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import '@storybook/addon-console'

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
    default: 'dark',
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
  }
}

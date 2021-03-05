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
  }
}

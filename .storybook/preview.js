import { CenterX } from '../packages/center/src/center.stories'

// global decorator
export const decorators = [
  Story => (
    <CenterX>
      <Story />
    </CenterX>
  )
]

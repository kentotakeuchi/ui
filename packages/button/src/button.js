import styled from 'styled-components'
import { COLORS } from '../../../utils/constants'

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px'
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px'
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px'
  }
}

const Button = ({ variant = 'fill', size = 'medium', children, className }) => {
  const styles = SIZES[size]

  let Component
  if (variant === 'fill') {
    Component = FillButton
  } else if (variant === 'outline') {
    Component = OutlineButton
  } else if (variant === 'ghost') {
    Component = GhostButton
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`)
  }

  return (
    <Component style={styles} className={className}>
      {children}
    </Component>
  )
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: ${COLORS.primary};

  &:focus {
    outline-offset: 4px;
  }
`

export const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`
export const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`
export const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;
  outline-color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`

export default Button

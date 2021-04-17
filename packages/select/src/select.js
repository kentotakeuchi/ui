import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../../utils/constants'
import Icon from '../../icon/src'
import { getDisplayedValue } from './select.helpers'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  )
}

export default Select

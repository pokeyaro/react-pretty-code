import React from 'react'
import type { SimplifiedThemeName } from '@/types'

export interface RightClickMenuProps {
  children: React.ReactNode
  showBookmarksBar?: boolean
  toggleShowBookmarksBar?: () => void
  hasWatermarkList?: boolean
  showWatermarks?: boolean
  toggleShowWatermarks?: () => void
  showLineNumbers?: boolean
  toggleShowLineNumbers?: () => void
  showBottomLine?: boolean
  toggleShowBottomLine?: () => void
  handleThemeChange?: (theme: SimplifiedThemeName) => void
  showExtendedButtons?: boolean
  toggleShowExtendedButtons?: (value: 'open' | 'close') => void
}

import type { BackgroundStyle } from '@/types'

export interface CodeFooterProps extends BackgroundStyle {
  showBottomLine: boolean
  lineCount: number
  charCount: number
  darkMode: boolean
  isPlaying: boolean
  togglePlay: () => void
}

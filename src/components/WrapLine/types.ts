import type { BackgroundStyle } from '@/types'

export interface WrapLineProps extends BackgroundStyle {
  className?: string
  isTextWrap: boolean
  toggleTextWrap: () => void
}

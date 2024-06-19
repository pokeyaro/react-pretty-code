import type { BackgroundStyle } from '@/types'

export interface ConfettiCopyProps extends BackgroundStyle {
  className?: string
  content: string
  enableGlobalHint?: boolean
  clickTextColor?: string
}

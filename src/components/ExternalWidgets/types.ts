import type { CopyStyle } from '@/types'

export interface ExternalWidgetsProps {
  enableUltraWideMode: boolean
  toggleEnableUltraWideMode: () => void
  copyStyle: CopyStyle
  toggleCopyStyle: () => void
  showScrollBars: boolean
  toggleShowScrollBars: () => void
  enableTerminalMode: boolean
  toggleEnableTerminalMode: () => void
  darkMode: boolean
  toggleDarkMode: () => void
  allowUserSelect: boolean
  toggleAllowUserSelect: () => void
}

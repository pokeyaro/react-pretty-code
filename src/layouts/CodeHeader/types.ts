import type { CodeProviderProps } from '@/cores/CodeProvider/types'
import type { Lang, BackgroundStyle, CopyStyle } from '@/types'

export interface CodeHeaderProps extends BackgroundStyle {
  fileType?: Lang
  onFileTypeChange: (newFileType: Lang) => void
  showBookmarksBar: boolean
  toggleTextWrap: () => void
  isTextWrap: boolean
  config: Partial<CodeProviderProps>
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
  showExtendedButtons: boolean
}

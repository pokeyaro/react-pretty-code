import type { SimplifiedThemeName } from '@/types'

export interface ThemeDialogBoxProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedTheme: SimplifiedThemeName
  onSelectTheme: (theme: SimplifiedThemeName) => void
  onApplyTheme: () => void
  onClose: () => void
}

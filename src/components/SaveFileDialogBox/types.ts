export interface SaveFileDialogBoxProps {
  open: boolean
  onClose: () => void
}

export type FileExt = 'pdf' | 'txt' | 'auto'

import type { SvgIconProps } from '@/components/SvgIcons'

export interface SaveFileDialogBoxProps {
  open: boolean
  onClose: () => void
}

export type FileExt = 'pdf' | 'txt' | 'auto'

export interface FileType {
  value: string
  label: string
  ext: string
  Icon: React.FC<SvgIconProps>
}

export type FileTypeList = FileType[]

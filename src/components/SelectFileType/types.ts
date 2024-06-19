import type { Lang } from '@/types'

export type FileType = {
  value: string
  label: string
  ext: string[]
  icon: string
  file?: string
}

export type Category =
  | 'Text Files'
  | 'API & Protocol Files'
  | 'Backend Language Files'
  | 'Frontend Language Files'
  | 'Mobile Development Files'
  | 'Markup Language Files'
  | 'Configuration Files'
  | 'Orchestration Files'
  | 'Database Query Files'
  | 'Scripting Language Files'

export type FileTypeGroup = {
  [category in Category]: FileType[]
}

export interface SelectFileTypeProps {
  className?: string
  backgroundColor?: string
  fileType?: Lang
  onFileTypeChange: (value: Lang) => void
}

import {
  FilePdfIcon,
  FileTextIcon,
  FileUnknownIcon
} from '@/components/SvgIcons'
import {
  SUPPORT_DOWNLOAD_PDF,
  SUPPORT_DOWNLOAD_TXT,
  SUPPORT_DOWNLOAD_AUTO
} from '@/constants'
import type { FileTypeList } from './types'

export const fileTypeList: FileTypeList = [
  {
    value: SUPPORT_DOWNLOAD_PDF,
    label: 'Adobe PDF',
    ext: '.pdf',
    Icon: FilePdfIcon
  },
  {
    value: SUPPORT_DOWNLOAD_TXT,
    label: 'Plain Text',
    ext: '.txt',
    Icon: FileTextIcon
  },
  {
    value: SUPPORT_DOWNLOAD_AUTO,
    label: 'Auto Assertion',
    ext: '???',
    Icon: FileUnknownIcon
  }
]

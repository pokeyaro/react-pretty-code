import { fileTypeList } from './config'
import type { Category } from './types'

const getIconForFileType = (filename: string) => {
  const ext = filename.slice(filename.lastIndexOf('.')).toLowerCase()
  for (const group in fileTypeList) {
    const files = fileTypeList[group as Category]
    for (const file of files) {
      if (file.ext.includes(ext)) {
        return file.icon
      }
    }
  }
  return null
}

export default getIconForFileType

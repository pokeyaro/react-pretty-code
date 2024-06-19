import { dateTimeString } from '@/lib/datetime'
import { DEFAULT_FILE_EXTENSION } from '@/constants'
import { useFileStore } from '@/stores/useFileStore'
import { SUPPORT_DOWNLOAD_AUTO, SUPPORT_MAX_FILENAME_LENGTH } from '@/constants'

const getDefaultExtension = (fileExt?: string): string => {
  if (!fileExt || fileExt === SUPPORT_DOWNLOAD_AUTO) {
    const {
      actions: { getExt }
    } = useFileStore.getState()
    const storeExt = getExt()
    return storeExt || DEFAULT_FILE_EXTENSION
  }
  return fileExt
}

const generateFilename = (filename: string, fileExt?: string): string => {
  if (filename.length === 0 || fileExt === undefined) {
    return 'unknown'
  }

  if (fileExt !== SUPPORT_DOWNLOAD_AUTO) {
    fileExt = '.' + fileExt
  }

  const extension = getDefaultExtension(fileExt)

  const timeString = dateTimeString()

  filename = filename.slice(0, SUPPORT_MAX_FILENAME_LENGTH)

  return `${filename}-${timeString}${extension}`
}

export { generateFilename, getDefaultExtension }

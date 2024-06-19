import textGenerator from '@/lib/textGenerator'
import pdfGenerator from '@/lib/pdfGenerator'

const downloadFile = async (
  filename: string,
  fileType?: string
): Promise<{ isOk: boolean; msg: string }> => {
  switch (fileType) {
    case 'pdf': {
      setTimeout(async () => {
        await pdfGenerator('#root', filename)
      }, 1500)

      new Promise((resolve) => setTimeout(() => resolve(undefined), 1000))

      return { isOk: true, msg: 'PDF Image Processing...' }
    }

    case 'txt': {
      textGenerator('pre code', 'span.linenumber', filename)
      return { isOk: true, msg: '' }
    }

    case 'auto': {
      textGenerator('pre code', 'span.linenumber', filename)
      return { isOk: true, msg: '' }
    }

    default:
      return { isOk: false, msg: 'Unsupported file format' }
  }
}

export default downloadFile

import { saveAs } from 'file-saver'

const textGenerator = (
  selectedTag: string,
  excludedTag?: string,
  filename?: string
) => {
  const codeElements = document.querySelectorAll(selectedTag)
  const textContentArray: string[] = []

  codeElements.forEach((codeElement) => {
    const codeClone = codeElement.cloneNode(true) as HTMLElement

    if (excludedTag) {
      codeClone.querySelectorAll(excludedTag).forEach((span) => {
        span.remove()
      })
    }

    textContentArray.push(codeClone.innerText)
  })

  const textContent = textContentArray.join('\n')

  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' })

  saveAs(blob, filename)
}

export default textGenerator

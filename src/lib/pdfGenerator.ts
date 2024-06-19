import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { ASSET_SOUND_PATH } from '@/constants'

const pdfGenerator = async (elementTag: string, filename?: string) => {
  const element = document.querySelector(elementTag) as HTMLElement

  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = `
    @keyframes flash {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
    .glass-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      z-index: 9998;
      transition: opacity 0.5s ease-in-out;
      opacity: 1;
    }
    .camera-flash {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      opacity: 0;
      z-index: 9999;
      animation: flash 1s ease-in-out;
    }
    .element-transition {
      transition: transform 0.5s ease-in-out, width 0.5s ease-in-out;
    }
  `
  document.head.appendChild(style)

  const overlay = document.createElement('div')
  overlay.className = 'glass-overlay'
  document.body.appendChild(overlay)

  await new Promise((resolve) => setTimeout(resolve, 100))

  const audio = new Audio(`${ASSET_SOUND_PATH}/shutter.mp3`)
  setTimeout(() => {
    audio.play().catch((error) => console.error('Error playing audio:', error))
  }, 350)

  const originalStyle = element.style.cssText
  const originalWidth = element.getBoundingClientRect().width

  const targetWidth = 1000
  const scaleFactor = targetWidth / originalWidth

  element.classList.add('element-transition')
  element.style.width = `${targetWidth}px`
  element.style.transform = `scale(${scaleFactor})`
  element.style.transformOrigin = 'top left'

  await new Promise((resolve) => setTimeout(resolve, 600))

  const flashOverlay = document.createElement('div')
  flashOverlay.className = 'camera-flash'
  document.body.appendChild(flashOverlay)

  await new Promise((resolve) => setTimeout(resolve, 1000))

  const canvas = await html2canvas(element, { useCORS: true })

  element.style.cssText = originalStyle

  const pdf = new jsPDF('p', 'mm', 'a4')
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = pdf.internal.pageSize.getHeight()

  const canvasWidth = canvas.width
  const canvasHeight = canvas.height

  let position = 0
  while (position < canvasHeight) {
    const canvasContext = canvas.getContext('2d', { willReadFrequently: true })
    const canvasPortion = canvasContext?.getImageData(
      0,
      position,
      canvasWidth,
      Math.min(pdfHeight * (canvasWidth / pdfWidth), canvasHeight - position)
    )

    if (canvasPortion) {
      const portionCanvas = document.createElement('canvas')
      const portionContext = portionCanvas.getContext('2d', {
        willReadFrequently: true
      })!
      portionCanvas.width = canvasWidth
      portionCanvas.height = pdfHeight * (canvasWidth / pdfWidth)
      portionContext.putImageData(canvasPortion, 0, 0)

      const portionImgData = portionCanvas.toDataURL('image/png')
      pdf.addImage(portionImgData, 'PNG', 0, 0, pdfWidth, pdfHeight)

      position += pdfHeight * (canvasWidth / pdfWidth)
      if (position < canvasHeight) {
        pdf.addPage()
      }
    }
  }

  overlay.style.opacity = '0'
  await new Promise((resolve) =>
    setTimeout(() => {
      document.body.removeChild(overlay)
      document.body.removeChild(flashOverlay)
      document.head.removeChild(style)
      resolve(undefined)
    }, 500)
  )

  pdf.save(filename)
}

export default pdfGenerator

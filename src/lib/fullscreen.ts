// DoubleClick to FullScreen
export const switchFullScreen = () => {
  const elem = document.documentElement
  if (!document.fullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

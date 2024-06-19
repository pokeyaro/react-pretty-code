import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { BackgroundStyle } from '@/types'

const adjustColorBrightness = (color: string, amount: number) => {
  const rgbaRegex = /rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/
  let r = 0,
    g = 0,
    b = 0,
    a = 1

  if (rgbaRegex.test(color)) {
    const match = color.match(rgbaRegex)
    if (match) {
      r = parseInt(match[1], 10)
      g = parseInt(match[2], 10)
      b = parseInt(match[3], 10)
      a = match[4] ? parseFloat(match[4]) : 1
    }
  } else {
    let hex = color.replace('#', '')
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map((x) => x + x)
        .join('')
    }
    r = parseInt(hex.slice(0, 2), 16)
    g = parseInt(hex.slice(2, 4), 16)
    b = parseInt(hex.slice(4, 6), 16)
  }

  r = Math.min(255, Math.max(0, r + amount))
  g = Math.min(255, Math.max(0, g + amount))
  b = Math.min(255, Math.max(0, b + amount))

  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const computeHoverAndActiveColors = (backgroundColor: string) => ({
  hoverBackgroundColor: adjustColorBrightness(backgroundColor, 20),
  activeBackgroundColor: adjustColorBrightness(backgroundColor, 10)
})

export interface BackgroundState extends BackgroundStyle {
  setBackgroundColor: (color: string) => void
}

export const useBackgroundStore = create(
  immer<BackgroundState>((set) => ({
    backgroundColor: 'rgba(40, 44, 52, 1)',
    ...computeHoverAndActiveColors('rgba(40, 44, 52, 1)'),
    setBackgroundColor: (color) => {
      const { hoverBackgroundColor, activeBackgroundColor } =
        computeHoverAndActiveColors(color)
      set((state) => {
        state.backgroundColor = color
        state.hoverBackgroundColor = hoverBackgroundColor
        state.activeBackgroundColor = activeBackgroundColor
      })
    }
  }))
)

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  hex = hex.replace(/^#/, '')

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((hexChar) => hexChar + hexChar)
      .join('')
  }

  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return { r, g, b }
}

export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`
}

export const getContrastingColor = (hex: string): string => {
  const { r, g, b } = hexToRgb(hex)
  const contrastingR = 255 - r
  const contrastingG = 255 - g
  const contrastingB = 255 - b
  return rgbToHex(contrastingR, contrastingG, contrastingB)
}

import React, { useRef, useEffect, useState } from 'react'
import type { WatermarkProps } from './types'

const Watermark: React.FC<WatermarkProps> = ({
  zIndex = 50,
  rotate = -22,
  content = 'Watermark',
  style,
  className,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  const updateSize = () => {
    const { offsetWidth, offsetHeight } = containerRef.current || {
      offsetWidth: 0,
      offsetHeight: 0
    }
    setContainerSize({ width: offsetWidth, height: offsetHeight })
  }

  useEffect(() => {
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    updateSize()
  }, [children])

  const renderWatermark = () => {
    const watermarks = []
    const watermarkWidth = 200
    const watermarkHeight = 100

    const rows = Math.ceil(containerSize.height / watermarkHeight) + 1
    const cols = Math.ceil(containerSize.width / watermarkWidth) + 1

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const topOffset = i * watermarkHeight
        const leftOffset =
          j * watermarkWidth + (i % 2 === 0 ? watermarkWidth / 2 : 0)

        watermarks.push(
          <div
            key={`${i}-${j}`}
            className='absolute flex transform flex-col items-center justify-center whitespace-nowrap opacity-10'
            style={{
              left: `${leftOffset}px`,
              top: `${topOffset}px`,
              width: `${watermarkWidth}px`,
              height: `${watermarkHeight}px`,
              transform: `rotate(${rotate}deg)`,
              pointerEvents: 'none'
            }}
          >
            {Array.isArray(content)
              ? content.map((text, index) => (
                  <div key={index} className='text-center'>
                    {text}
                  </div>
                ))
              : content}
          </div>
        )
      }
    }

    return watermarks
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ zIndex }}
    >
      {children}
      <div
        className='pointer-events-none absolute inset-0 overflow-hidden'
        style={{ zIndex, ...style }}
      >
        <div
          style={{
            width: containerSize.width,
            height: containerSize.height,
            position: 'relative'
          }}
        >
          {renderWatermark()}
        </div>
      </div>
    </div>
  )
}

export default Watermark

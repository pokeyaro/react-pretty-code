import React, { useState, useEffect } from 'react'
import { ChromePicker, ColorResult, ColorChangeHandler } from 'react-color'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useBackgroundStore } from '@/stores/useBackgroundStore'
import type { ColorPickerDialogBoxProps } from './types'

const ChromePickerWrapper = ({
  color = '#ffffff',
  onChangeComplete = () => {}
}: {
  color?: string
  onChangeComplete?: ColorChangeHandler
}) => {
  return <ChromePicker color={color} onChangeComplete={onChangeComplete} />
}

const ColorPickerDialogBox: React.FC<ColorPickerDialogBoxProps> = ({
  open,
  onOpenChange,
  onClose
}) => {
  const { backgroundColor, setBackgroundColor } = useBackgroundStore()
  const [color, setColor] = useState(backgroundColor)

  useEffect(() => {
    setColor(backgroundColor)
  }, [backgroundColor])

  const handleApply = () => {
    onClose()
  }

  const handleColorChangeComplete = (colorResult: ColorResult) => {
    const rgbaColor = `rgba(${colorResult.rgb.r}, ${colorResult.rgb.g}, ${colorResult.rgb.b}, ${colorResult.rgb.a})`
    setColor(rgbaColor)
    setBackgroundColor(rgbaColor)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Background Color</DialogTitle>
          <DialogDescription>
            Choose the background color for your component. Hover and active
            colors will be automatically calculated.
          </DialogDescription>
        </DialogHeader>
        <div className='mb-4 flex items-center justify-center'>
          <ChromePickerWrapper
            color={color}
            onChangeComplete={handleColorChangeComplete}
          />
        </div>
        <DialogFooter>
          <Button variant='default' onClick={handleApply}>
            Apply
          </Button>
          <Button variant='ghost' onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ColorPickerDialogBox

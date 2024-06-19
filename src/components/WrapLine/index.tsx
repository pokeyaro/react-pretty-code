import React from 'react'
import clsx from 'clsx'
import { WrapText, Text } from 'lucide-react'
import type { WrapLineProps } from './types'
import StyledButton from '@/components/styled-components/StyledButton'

const WrapLine: React.FC<WrapLineProps> = ({
  className,
  isTextWrap,
  toggleTextWrap,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor
}) => {
  return (
    <StyledButton
      className={clsx('flex items-center justify-center gap-2', className)}
      onClick={toggleTextWrap}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $activeBackgroundColor={activeBackgroundColor}
    >
      {isTextWrap ? (
        <Text className='h-6 w-6 text-base' />
      ) : (
        <WrapText className='h-6 w-6 text-base' />
      )}
      <span className='text-base'>
        {isTextWrap ? 'Line-unwrap' : 'Line-wrap'}
      </span>
    </StyledButton>
  )
}

export default WrapLine

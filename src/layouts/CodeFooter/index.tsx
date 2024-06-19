import React from 'react'
import clsx from 'clsx'
import type { CodeFooterProps } from './types'
import { Separator } from '@/components/ui/separator'
import { CirclePlay, CircleStop } from 'lucide-react'
import StyledButton from '@/components/styled-components/StyledButton'

const CodeFooter: React.FC<CodeFooterProps> = ({
  showBottomLine,
  lineCount,
  charCount,
  isPlaying,
  togglePlay,
  darkMode,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor
}) => {
  return (
    <>
      {showBottomLine && (
        <div
          className={clsx(
            'mb-4 flex h-12 items-center justify-end gap-4 px-8',
            darkMode ? 'dark-mode' : 'light-mode'
          )}
        >
          <StyledButton
            size='icon'
            $backgroundColor={backgroundColor}
            $hoverBackgroundColor={hoverBackgroundColor}
            $activeBackgroundColor={activeBackgroundColor}
          >
            {isPlaying ? (
              <CircleStop
                className={clsx(
                  'h-5 w-5 cursor-pointer transition-all duration-150 hover:text-amber-400 active:text-amber-600',
                  darkMode ? 'dark-mode' : 'light-mode'
                )}
                onClick={togglePlay}
              />
            ) : (
              <CirclePlay
                className={clsx(
                  'h-5 w-5 cursor-pointer transition-all duration-150 hover:text-amber-400 active:text-amber-600',
                  darkMode ? 'dark-mode' : 'light-mode'
                )}
                onClick={togglePlay}
              />
            )}
          </StyledButton>
          <Separator orientation='vertical' className='h-5' />
          <span className='text-base'>Statistics:</span>
          <span className='text-base'>
            {lineCount} lines, {charCount} characters
          </span>
        </div>
      )}
    </>
  )
}

export default CodeFooter

import React, { useState } from 'react'
import clsx from 'clsx'
import { copyToClipboard } from '@/lib/clipboard'
import { Clipboard, Check } from 'lucide-react'
import styles from './index.module.scss'
import type { ConfettiCopyProps } from './types'
import StyledButton from '@/components/styled-components/StyledButton'
import { useToastPro } from '@/components/ui/use-toast-pro'

const ConfettiCopy: React.FC<ConfettiCopyProps> = ({
  className = '',
  content,
  enableGlobalHint = false,
  clickTextColor = 'none',
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const { showToast } = useToastPro()

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove(styles.animate)
    setIsAnimating(false)
  }

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonElement = e.currentTarget

    if (!isAnimating && buttonElement) {
      const isSuccess = await copyToClipboard(content)

      if (isSuccess) {
        enableGlobalHint &&
          showToast({
            title: 'success',
            description: 'Copied to clipboard successfully!',
            level: 'success',
            position: 'top-right'
          })

        setIsCopied(true)
        setIsAnimating(true)

        if (buttonElement.classList.contains(styles.animate)) {
          buttonElement.classList.remove(styles.animate)
          void buttonElement.offsetWidth
        }

        buttonElement.classList.add(styles.animate)

        setTimeout(() => {
          setIsCopied(false)
        }, 3000)
      } else {
        enableGlobalHint &&
          showToast({
            title: 'error',
            description: 'Failed to copy the text to clipboard.',
            level: 'error',
            position: 'top-right'
          })
      }
    }
  }

  return (
    <StyledButton
      className={clsx(
        'flex items-center justify-end gap-2 disabled:opacity-100',
        styles['confetti-button'],
        className
      )}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
      disabled={isAnimating}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $activeBackgroundColor={activeBackgroundColor}
    >
      {isCopied ? (
        <Check
          className='h-6 w-6 text-sm text-green-400'
          style={{
            color: clickTextColor
          }}
        />
      ) : (
        <Clipboard className='h-6 w-6 text-sm' />
      )}
      <span
        className={clsx('text-base', isCopied && 'text-green-400')}
        style={isCopied ? { color: clickTextColor } : undefined}
      >
        {isCopied ? 'Copied' : 'Copy'}
      </span>
    </StyledButton>
  )
}

export default ConfettiCopy

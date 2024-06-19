import React, { useState } from 'react'
import { copyToClipboard } from '@/lib/clipboard'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { CopyIcon, CheckIcon } from '@/components/SvgIcons'
import { useToastPro } from '@/components/ui/use-toast-pro'
import type { TipCopyProps } from './types'

const TipCopy: React.FC<TipCopyProps> = ({
  className = '',
  content,
  enableGlobalHint = false
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const { showToast } = useToastPro()

  const handleClick = async () => {
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

  return (
    <TooltipProvider delayDuration={1000}>
      <Tooltip>
        <TooltipTrigger className={`z-[100] ${className}`}>
          <div
            className='rounded-md p-2 transition-colors duration-200 hover:bg-gray-100'
            onClick={handleClick}
          >
            {isCopied ? (
              <CheckIcon className='text-green-500' />
            ) : (
              <CopyIcon className='text-slate-400 text-opacity-80' />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className='z-[100] h-10 border-0 bg-black px-6 py-2 text-base font-thin text-white'>
          {isCopied ? 'Copied' : 'Copy'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TipCopy

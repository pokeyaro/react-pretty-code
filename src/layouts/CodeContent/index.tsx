import React from 'react'
import { switchFullScreen } from '@/lib/fullscreen'
import { getContrastingColor } from '@/lib/color'
import SyntaxHighlighter from '@/components/SyntaxHighlighter'
import PreTagWithPrompt from '@/components/PreTagWithPrompt'
import Watermark from '@/components/Watermark'
import { useToastPro } from '@/components/ui/use-toast-pro'
import type { CodeContentProps } from './types'

const CodeContent: React.FC<CodeContentProps> = ({
  preRef,
  lang,
  themeStyle,
  copyStyle,
  isTextWrap,
  showPreTag,
  promptSymbol,
  watermarkList,
  showCopyButton,
  showWatermarks,
  showVerticalDivideLine,
  showLineNumbers,
  enableTerminalMode,
  allowFullScreen,
  enableGlobalHint = false,
  children,
  backgroundColor
}) => {
  const preClassName = `
  custom-syntax-highlighter
  ${showLineNumbers ? 'pre-line-numbers' : ''}
  ${copyStyle === 'inner' || !showCopyButton ? 'pre-inner' : ''}
`
  const { showToast } = useToastPro()

  const handleDoubleClick = () => {
    if (allowFullScreen) {
      switchFullScreen()

      if (enableGlobalHint) {
        const isFullScreen = document.fullscreenElement != null

        showToast({
          title: 'info',
          description: isFullScreen ? 'Exit full screen' : 'Enter full screen',
          level: 'info',
          position: 'top-right'
        })
      }
    }
  }

  return (
    <Watermark rotate={-25} content={showWatermarks ? watermarkList : ''}>
      <SyntaxHighlighter
        language={String(lang)}
        style={themeStyle}
        customStyle={{
          padding: '20px 0',
          overflowX: 'auto'
        }}
        wrapLongLines={isTextWrap}
        showLineNumbers={showLineNumbers}
        lineNumberStyle={{
          color: 'rgb(136, 136, 136)',
          fontSize: '16px',
          width: '30px',
          borderRight: showVerticalDivideLine ? '1px solid #444' : undefined,
          marginRight: showVerticalDivideLine ? '20px' : undefined
        }}
        className={preClassName}
        PreTag={
          enableTerminalMode && showPreTag
            ? (props) => (
                <PreTagWithPrompt
                  {...props}
                  promptSymbol={promptSymbol}
                  preRef={preRef}
                  textColor={getContrastingColor(backgroundColor)}
                />
              )
            : (props) => <pre {...props} ref={preRef} />
        }
        onDoubleClick={handleDoubleClick}
      >
        {children}
      </SyntaxHighlighter>
    </Watermark>
  )
}

export default CodeContent

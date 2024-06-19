import React from 'react'
import clsx from 'clsx'
import TipCopy from '@/components/TipCopy'
import WrapLine from '@/components/WrapLine'
import ExternalWidgets from '@/components/ExternalWidgets'
import ConfettiCopy from '@/components/ConfettiCopy'
import SelectFileType from '@/components/SelectFileType'
import MetadataDisplay from '@/components/MetadataDisplay'
import { Separator } from '@/components/ui/separator'
import type { CodeHeaderProps } from './types'

const CodeHeader: React.FC<CodeHeaderProps> = ({
  fileType,
  onFileTypeChange,
  showBookmarksBar,
  toggleTextWrap,
  isTextWrap,
  config,
  enableUltraWideMode,
  toggleEnableUltraWideMode,
  copyStyle,
  toggleCopyStyle,
  showScrollBars,
  toggleShowScrollBars,
  enableTerminalMode,
  toggleEnableTerminalMode,
  darkMode,
  toggleDarkMode,
  allowUserSelect,
  toggleAllowUserSelect,
  showExtendedButtons,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor
}) => {
  if (showBookmarksBar) {
    return (
      <div
        className={clsx(
          'relative flex h-12 items-center justify-between rounded-t-2xl text-xs',
          darkMode ? 'dark-mode' : 'light-mode'
        )}
      >
        <div className='min-w-[190px] pl-[10px]'>
          <SelectFileType
            className='border-0 outline-0'
            fileType={fileType}
            onFileTypeChange={onFileTypeChange}
          />
        </div>

        <MetadataDisplay metadata={config.metadata} />

        <div className='flex min-w-[190px] items-center justify-end pr-[10px]'>
          <WrapLine
            className={darkMode ? 'dark-mode' : 'light-mode'}
            backgroundColor={backgroundColor}
            hoverBackgroundColor={hoverBackgroundColor}
            activeBackgroundColor={activeBackgroundColor}
            isTextWrap={isTextWrap}
            toggleTextWrap={toggleTextWrap}
          />

          {config.showCopyButton && copyStyle !== 'inner' && (
            <Separator className='mx-1 h-5' orientation='vertical' />
          )}

          {config.showCopyButton &&
            (copyStyle === 'default' || copyStyle === 'outer' ? (
              <ConfettiCopy
                className={darkMode ? 'dark-mode' : 'light-mode'}
                content={config?.children as string}
                enableGlobalHint={config.enableGlobalHint}
                clickTextColor='lightGreen'
                backgroundColor={backgroundColor}
                hoverBackgroundColor={hoverBackgroundColor}
                activeBackgroundColor={activeBackgroundColor}
              />
            ) : copyStyle === 'inner' ? (
              <TipCopy
                className='absolute right-5 top-16 z-50'
                content={config?.children as string}
                enableGlobalHint={config.enableGlobalHint}
              />
            ) : null)}
        </div>

        {showExtendedButtons && (
          <ExternalWidgets
            enableUltraWideMode={enableUltraWideMode}
            toggleEnableUltraWideMode={toggleEnableUltraWideMode}
            copyStyle={copyStyle}
            toggleCopyStyle={toggleCopyStyle}
            showScrollBars={showScrollBars}
            toggleShowScrollBars={toggleShowScrollBars}
            enableTerminalMode={enableTerminalMode}
            toggleEnableTerminalMode={toggleEnableTerminalMode}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            allowUserSelect={allowUserSelect}
            toggleAllowUserSelect={toggleAllowUserSelect}
          />
        )}
      </div>
    )
  }
}

export default CodeHeader

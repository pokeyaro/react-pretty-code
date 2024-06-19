import React from 'react'
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import {
  Sun,
  Moon,
  Dock,
  PanelTop,
  Touchpad,
  TouchpadOff,
  ArrowUpDown,
  ArrowDownUp,
  BookOpenText,
  SquareTerminal,
  ChevronsRightLeft,
  ChevronsLeftRight
} from 'lucide-react'
import type { ExternalWidgetsProps } from './types'

const ExternalWidgets: React.FC<ExternalWidgetsProps> = ({
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
  toggleAllowUserSelect
}) => {
  return (
    <>
      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[44px] z-50 hover:bg-[none]'
              onClick={toggleDarkMode}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {darkMode ? (
                  <Sun className='h-6 w-6' />
                ) : (
                  <Moon className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[76px] z-50 hover:bg-[none]'
              onClick={toggleEnableUltraWideMode}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {enableUltraWideMode ? (
                  <ChevronsRightLeft className='h-6 w-6' />
                ) : (
                  <ChevronsLeftRight className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {enableUltraWideMode ? 'Normal Mode' : 'Ultra Wide Mode'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[108px] z-50 hover:bg-[none]'
              onClick={toggleCopyStyle}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {copyStyle === 'inner' ? (
                  <ArrowDownUp className='h-6 w-6' />
                ) : (
                  <ArrowUpDown className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {copyStyle === 'inner' ? 'Outer Copy (default)' : 'Inner Copy'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[140px] z-50 hover:bg-[none]'
              onClick={toggleAllowUserSelect}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {allowUserSelect ? (
                  <TouchpadOff className='h-6 w-6' />
                ) : (
                  <Touchpad className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {allowUserSelect ? 'Unselectable panels' : 'Selectable panels'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[172px] z-50 hover:bg-[none]'
              onClick={toggleShowScrollBars}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {showScrollBars ? (
                  <PanelTop className='h-6 w-6' />
                ) : (
                  <Dock className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {showScrollBars ? 'Hide Scrollbars' : 'Show Scrollbars'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              className='absolute right-[-44px] top-[204px] z-50 hover:bg-[none]'
              onClick={toggleEnableTerminalMode}
            >
              <Button
                className='bg-slate-200 transition-colors duration-300 hover:bg-orange-300'
                size='icon'
              >
                {enableTerminalMode ? (
                  <BookOpenText className='h-6 w-6' />
                ) : (
                  <SquareTerminal className='h-6 w-6' />
                )}
              </Button>
            </Toggle>
          </TooltipTrigger>
          <TooltipContent className='z-[100]' side='right'>
            <p className='inline-flex text-xs text-black'>
              {enableTerminalMode ? 'Text Mode' : 'Terminal Mode'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}

export default ExternalWidgets

import React, { useState } from 'react'
import SaveFileDialogBox from '@/components/SaveFileDialogBox'
import {
  ContextMenu,
  ContextMenuSub,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuShortcut,
  ContextMenuSeparator,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuCheckboxItem
} from '@/components/ui/context-menu'
import ThemeDialogBox from '@/components/ThemeDialogBox'
import ColorPickerDialogBox from '@/components/ColorPickerDialogBox'
import {
  Crop,
  Save,
  Type,
  Printer,
  Palette,
  Infinity,
  Sparkles,
  AppWindow,
  RefreshCcw
} from 'lucide-react'
import { useToastPro } from '@/components/ui/use-toast-pro'
import type { RightClickMenuProps } from './types'
import type { SimplifiedThemeName } from '@/types'

const RightClickMenu: React.FC<RightClickMenuProps> = ({
  children,
  showBookmarksBar,
  toggleShowBookmarksBar,
  hasWatermarkList,
  showWatermarks,
  toggleShowWatermarks,
  showLineNumbers,
  toggleShowLineNumbers,
  showBottomLine,
  toggleShowBottomLine,
  handleThemeChange,
  showExtendedButtons,
  toggleShowExtendedButtons
}) => {
  const { showToast } = useToastPro()
  const handleBack = () => window.history.back()
  const handleReload = () => window.location.reload()
  const handlePrint = () => {
    showToast({
      title: 'warning',
      description:
        "Please ensure the 'Background Graphics' option is selected in the print dialog.",
      level: 'warning',
      position: 'top-right'
    })
    setTimeout(() => window.print(), 1000)
  }

  const [isSaveFileOpen, setIsSaveFileOpen] = useState(false)
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] =
    useState<SimplifiedThemeName>('atom')
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)

  const openColorPickerModal = () => setIsColorPickerOpen(true)
  const closeColorPickerModal = () => setIsColorPickerOpen(false)
  const openThemeModal = () => setIsThemeModalOpen(true)
  const closeThemeModal = () => setIsThemeModalOpen(false)
  const openSaveFileModal = () => setIsSaveFileOpen(true)
  const closeSaveFileModal = () => setIsSaveFileOpen(false)

  const handleThemeSelection = (value: SimplifiedThemeName) => {
    setSelectedTheme(value)
  }

  const applyTheme = () => {
    if (handleThemeChange) {
      handleThemeChange(selectedTheme)
      closeThemeModal()
    }
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>{children}</ContextMenuTrigger>
        <ContextMenuContent className='w-[200px]'>
          <ContextMenuItem inset onClick={handleBack}>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset onClick={handleReload}>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-[120px]'>
              <ContextMenuItem onClick={openSaveFileModal}>
                <Save className='mr-2 h-4 w-4 font-light text-slate-400' />
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem onClick={handlePrint}>
                <Printer className='mr-2 h-4 w-4 font-light text-slate-400' />
                Print
                <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                <Crop className='mr-2 h-4 w-4 font-light text-slate-400' /> Crop
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem disabled>
                <RefreshCcw className='mr-2 h-4 w-4 font-light text-slate-400' />
                Sync Status
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>Settings</ContextMenuSubTrigger>
            <ContextMenuSubContent className='w-[120px]'>
              <ContextMenuItem onClick={openColorPickerModal}>
                <Palette className='mr-2 h-4 w-4 font-light text-slate-400' />
                Set Color Picker
              </ContextMenuItem>
              <ContextMenuItem onClick={openThemeModal}>
                <Sparkles className='mr-2 h-4 w-4 font-light text-slate-400' />
                Set Syntax Themes
              </ContextMenuItem>
              <ContextMenuItem disabled>
                <Type className='mr-2 h-4 w-4 font-light text-slate-400' />
                Set Font Size
              </ContextMenuItem>
              <ContextMenuItem disabled>
                <Infinity className='mr-2 h-4 w-4 font-light text-slate-400' />
                Set Maximum Row
              </ContextMenuItem>
              <ContextMenuItem disabled>
                <AppWindow className='mr-2 h-4 w-4 font-light text-slate-400' />
                Set Viewport Width
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked disabled>
            Can be marked
            <ContextMenuShortcut>⇧⌘M</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={showBookmarksBar}
            onClick={toggleShowBookmarksBar}
          >
            Show Header Bar
            <ContextMenuShortcut>⇧⌘H</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showBottomLine}
            onClick={toggleShowBottomLine}
          >
            Show Bottom Row
            <ContextMenuShortcut>⇧⌘B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showLineNumbers}
            onClick={toggleShowLineNumbers}
          >
            Show Line Numbers
            <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showWatermarks}
            onClick={toggleShowWatermarks}
            disabled={!hasWatermarkList}
          >
            Show Watermark
            <ContextMenuShortcut>⇧⌘W</ContextMenuShortcut>
          </ContextMenuCheckboxItem>

          <ContextMenuRadioGroup value={showExtendedButtons ? 'close' : 'open'}>
            <ContextMenuSeparator />
            <ContextMenuRadioItem
              value='close'
              onClick={() => toggleShowExtendedButtons!('open')}
            >
              Open extended buttons
            </ContextMenuRadioItem>
            <ContextMenuRadioItem
              value='open'
              onClick={() => toggleShowExtendedButtons!('close')}
            >
              Close extended buttons
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>

      <SaveFileDialogBox open={isSaveFileOpen} onClose={closeSaveFileModal} />

      <ThemeDialogBox
        open={isThemeModalOpen}
        onOpenChange={setIsThemeModalOpen}
        selectedTheme={selectedTheme}
        onSelectTheme={handleThemeSelection}
        onApplyTheme={applyTheme}
        onClose={closeThemeModal}
      />

      <ColorPickerDialogBox
        open={isColorPickerOpen}
        onOpenChange={setIsColorPickerOpen}
        onClose={closeColorPickerModal}
      />
    </>
  )
}

export default RightClickMenu

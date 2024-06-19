import React, { useEffect, useState } from 'react'
import { useSystemStore } from '@/stores/useSystemStore'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue
} from '@/components/ui/select'
import { SunMoon } from 'lucide-react'
import themeMappings from '@/components/ThemeDialogBox/config'
import type { ThemeDialogBoxProps } from './types'
import type { SimplifiedThemeName } from '@/types'

const ThemeDialogBox: React.FC<ThemeDialogBoxProps> = ({
  open,
  onOpenChange,
  selectedTheme,
  onSelectTheme,
  onApplyTheme,
  onClose
}) => {
  const {
    states: { darkMode },
    actions: { setTheme, toggleDarkMode }
  } = useSystemStore()
  const [currentMode, setCurrentMode] = useState<string>('light')

  useEffect(() => {
    setCurrentMode(darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleThemeChange = (value: SimplifiedThemeName) => {
    onSelectTheme(value)
  }

  const handleApply = () => {
    console.log('Selected theme value:', selectedTheme)
    setTheme(selectedTheme)
    onApplyTheme()
  }

  const handleToggleDarkMode = () => {
    toggleDarkMode()
  }

  const themeDisplayName = (
    <span className='flex items-center justify-start text-sm'>
      <span className='text-sm capitalize'>{selectedTheme}</span>
      &nbsp;With&nbsp;
      <Button
        size='sm'
        onClick={handleToggleDarkMode}
        variant='ghost'
        className='inline-flex items-center'
      >
        <SunMoon className='mr-1 h-4 w-4' />
        {currentMode}
      </Button>
    </span>
  )

  const getBackgroundColor = (theme: SimplifiedThemeName): string => {
    const themeObject = themeMappings[theme][darkMode ? 'dark' : 'light']
    return String(themeObject.hljs.background) || '#ffffff'
  }

  const getTextColor = (theme: SimplifiedThemeName): string => {
    const themeObject = themeMappings[theme][darkMode ? 'dark' : 'light']
    return String(themeObject.hljs.color) || '#000000'
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild className='hidden'>
        <Button variant='default'>Set Themes</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Theme</DialogTitle>
          <DialogDescription>
            Choose a theme for the code reader panel
          </DialogDescription>
        </DialogHeader>

        <div className='mb-4 flex items-center justify-between'>
          <div className='flex-1 text-center text-xl font-semibold'>
            {themeDisplayName}
          </div>
          <Select
            onValueChange={(value: SimplifiedThemeName) =>
              handleThemeChange(value)
            }
            value={selectedTheme}
          >
            <SelectTrigger className='flex-1'>
              <SelectValue placeholder='Select a theme' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(themeMappings).map((theme) => (
                  <SelectItem key={theme} value={theme as SimplifiedThemeName}>
                    <div className='flex items-center'>
                      <div
                        className='mr-2 flex h-4 min-w-48 items-center justify-center rounded text-sm'
                        style={{
                          backgroundColor: getBackgroundColor(
                            theme as SimplifiedThemeName
                          ),
                          color: getTextColor(theme as SimplifiedThemeName)
                        }}
                      >
                        {theme}
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button onClick={handleApply}>Apply</Button>
          <Button variant='ghost' onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ThemeDialogBox

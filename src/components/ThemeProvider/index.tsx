import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode
} from 'react'
import type { ThemeName } from '@/types'

interface ThemeContextProps {
  preRef: React.RefObject<HTMLPreElement>
  getPreBgColor: () => string
  setTheme: (theme: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const preRef = useRef<HTMLPreElement>(null)
  const [, setTheme] = useState<ThemeName>()

  const getPreBgColor = (): string => {
    return preRef.current
      ? getComputedStyle(preRef.current).backgroundColor
      : 'transparent'
  }

  return (
    <ThemeContext.Provider value={{ preRef, getPreBgColor, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}

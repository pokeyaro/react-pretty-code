import React from 'react'
import CodeProvider from './CodeProvider'
import type { CodeProviderProps } from './CodeProvider/types'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/index.css'
import '@/styles/globals.css'
import '@/styles/custom.css'

const CodeWrapper: React.FC<CodeProviderProps> = (props) => {
  return (
    <ThemeProvider>
      <Toaster />
      <CodeProvider {...props} />
    </ThemeProvider>
  )
}

export default CodeWrapper

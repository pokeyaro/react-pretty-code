import { useState, useEffect } from 'react'
import configHandler from '@/configs/handler'
import type { CodeProviderProps } from '@/cores/CodeProvider/types'

const useInitializedConfig = (props: CodeProviderProps) => {
  const initialConfig = configHandler(props)
  const [config, setConfig] =
    useState<Partial<CodeProviderProps>>(initialConfig)

  useEffect(() => {
    const mergedConfig = configHandler(props)
    setConfig(mergedConfig)
  }, [props])

  return { config, setConfig }
}

export default useInitializedConfig

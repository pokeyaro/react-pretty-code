import { useState, useEffect } from 'react'
import { useFileStore } from '@/stores/useFileStore'
import {
  DEFAULT_PROMPT_SH,
  DEFAULT_PROMPT_CMD,
  DEFAULT_PROMPT_SQL,
  DEFAULT_PROMPT_ZSH,
  DEFAULT_PROMPT_BASH,
  DEFAULT_PROMPT_PYTHON,
  DEFAULT_PROMPT_POWERSHELL
} from '@/constants'

const useTerminalMode = (
  enableTerminalMode?: boolean,
  shellPromptSymbol?: string
) => {
  const [promptSymbol, setPromptSymbol] = useState<string>('')
  const [showPreTag, setShowPreTag] = useState<boolean>(
    enableTerminalMode ?? false
  )
  const getLabel = useFileStore((state) => state.actions.getLabel)

  useEffect(() => {
    const updateShowPreTag = (newLabel: string) => {
      switch (newLabel) {
        case 'Bash':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_BASH)
          break
        case 'Z Shell':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_ZSH)
          break
        case 'PowerShell':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_POWERSHELL)
          break
        case 'CMD':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_CMD)
          break
        case 'SQL':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_SQL)
          break
        case 'Python':
          setShowPreTag(true)
          setPromptSymbol(DEFAULT_PROMPT_PYTHON)
          break
        case 'Shell':
          setShowPreTag(true)
          setPromptSymbol(shellPromptSymbol ?? DEFAULT_PROMPT_SH)
          break
        default:
          setShowPreTag(false)
          break
      }
    }

    updateShowPreTag(getLabel())

    const unsubscribe = useFileStore.subscribe(
      (state) => state.states.label,
      (newLabel: string) => updateShowPreTag(newLabel)
    )

    return () => unsubscribe()
  }, [getLabel, shellPromptSymbol])

  return { promptSymbol, showPreTag }
}

export default useTerminalMode

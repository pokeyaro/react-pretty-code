import { useEffect } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import type { CodeProviderProps } from '@/cores/CodeProvider/types'

const useSyncSharedState = (config: Partial<CodeProviderProps>) => {
  const {
    setShowBookmarksBar,
    setWatermarkList,
    setShowLineNumbers,
    setShowBottomLine,
    setShowExtendedButtons,
    setEnableUltraWideMode,
    setShowScrollBars,
    setAllowUserSelect,
    setEnableTerminalMode,
    setCopyStyle
  } = useAppStore((state) => ({
    enableUltraWideMode: state.enableUltraWideMode,
    showWatermarks: state.showWatermarks,
    toggleShowWatermarks: state.toggleShowWatermarks,
    setShowBookmarksBar: state.setShowBookmarksBar,
    setWatermarkList: state.setWatermarkList,
    setShowLineNumbers: state.setShowLineNumbers,
    setShowBottomLine: state.setShowBottomLine,
    setShowExtendedButtons: state.setShowExtendedButtons,
    setEnableUltraWideMode: state.setEnableUltraWideMode,
    setShowScrollBars: state.setShowScrollBars,
    setAllowUserSelect: state.setAllowUserSelect,
    setEnableTerminalMode: state.setEnableTerminalMode,
    setCopyStyle: state.setCopyStyle
  }))

  useEffect(() => {
    setShowBookmarksBar(config.showBookmarksBar ?? true)
    setWatermarkList(config.watermarkList ?? [])
    setShowLineNumbers(config.showLineNumbers ?? false)
    setShowBottomLine(config.showBottomLine ?? false)
    setShowExtendedButtons(config.showExtendedButtons ?? false)
    setEnableUltraWideMode(config.enableUltraWideMode ?? false)
    setShowScrollBars(config.showScrollBars ?? false)
    setAllowUserSelect(config.allowUserSelect ?? false)
    setEnableTerminalMode(config.enableTerminalMode ?? false)
    setCopyStyle(config.copyStyle ?? 'default')
  }, [
    config,
    setShowBookmarksBar,
    setWatermarkList,
    setShowLineNumbers,
    setShowBottomLine,
    setShowExtendedButtons,
    setEnableUltraWideMode,
    setShowScrollBars,
    setAllowUserSelect,
    setEnableTerminalMode,
    setCopyStyle
  ])
}

export default useSyncSharedState

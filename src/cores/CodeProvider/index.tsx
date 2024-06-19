import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import type { Lang, SimplifiedThemeName } from '@/types'
import type { CodeProviderProps } from './types'
import useTextWrap from '@/hooks/useTextWrap'
import useTypeWriter from '@/hooks/useTypeWriter'
import useTerminalMode from '@/hooks/useTerminalMode'
import useSyncSharedState from '@/hooks/useSyncSharedState'
import useInitializedConfig from '@/hooks/useInitializedConfig'
import { useThemeContext } from '@/components/ThemeProvider'
import RightClickMenu from '@/components/RightClickMenu'
import CodeHeader from '@/layouts/CodeHeader'
import CodeContent from '@/layouts/CodeContent'
import CodeFooter from '@/layouts/CodeFooter'
import { getLanguage } from '@/components/SelectFileType/lang'
import themeMappings from '@/components/ThemeDialogBox/config'
import { useAppStore } from '@/stores/useAppStore'
import { useBackgroundStore } from '@/stores/useBackgroundStore'
import { useSystemStore } from '@/stores/useSystemStore'
import styles from './index.module.scss'

const CodeProvider: React.FC<CodeProviderProps> = (props) => {
  const { config } = useInitializedConfig(props)

  const [originalLang, setOriginalLang] = useState<Lang>('plaintext')
  const [actualLang, setActualLang] = useState<Lang>('plaintext')
  const {
    states: { darkMode, theme },
    actions: { setTheme, toggleDarkMode }
  } = useSystemStore()

  const { preRef, getPreBgColor } = useThemeContext()

  useEffect(() => {
    const { actualLang, originalLang } = getLanguage(
      props.lang,
      config.metadata?.filename
    )
    setOriginalLang(originalLang)
    setActualLang(actualLang)
  }, [props.lang, config.metadata?.filename])

  const handleFileTypeChange = (newFileType: Lang) => {
    const { actualLang, originalLang } = getLanguage(
      newFileType,
      config.metadata?.filename
    )
    setOriginalLang(originalLang)
    setActualLang(actualLang)
  }

  useSyncSharedState(config)

  const {
    showBookmarksBar,
    toggleShowBookmarksBar,
    watermarkList,
    showWatermarks,
    toggleShowWatermarks,
    showLineNumbers,
    toggleShowLineNumbers,
    showBottomLine,
    toggleShowBottomLine,
    enableUltraWideMode,
    toggleEnableUltraWideMode,
    showExtendedButtons,
    toggleShowExtendedButtons,
    showScrollBars,
    toggleShowScrollBars,
    allowUserSelect,
    toggleAllowUserSelect,
    enableTerminalMode,
    toggleEnableTerminalMode,
    copyStyle,
    toggleCopyStyle
  } = useAppStore((state) => ({
    showBookmarksBar: state.showBookmarksBar,
    toggleShowBookmarksBar: state.toggleShowBookmarksBar,
    watermarkList: state.watermarkList,
    showWatermarks: state.showWatermarks,
    toggleShowWatermarks: state.toggleShowWatermarks,
    showLineNumbers: state.showLineNumbers,
    toggleShowLineNumbers: state.toggleShowLineNumbers,
    showBottomLine: state.showBottomLine,
    toggleShowBottomLine: state.toggleShowBottomLine,
    enableUltraWideMode: state.enableUltraWideMode,
    toggleEnableUltraWideMode: state.toggleEnableUltraWideMode,
    showExtendedButtons: state.showExtendedButtons,
    toggleShowExtendedButtons: state.toggleShowExtendedButtons,
    showScrollBars: state.showScrollBars,
    toggleShowScrollBars: state.toggleShowScrollBars,
    allowUserSelect: state.allowUserSelect,
    toggleAllowUserSelect: state.toggleAllowUserSelect,
    enableTerminalMode: state.enableTerminalMode,
    toggleEnableTerminalMode: state.toggleEnableTerminalMode,
    copyStyle: state.copyStyle,
    toggleCopyStyle: state.toggleCopyStyle
  }))

  const {
    allowFullScreen,
    enableGlobalHint,
    showCopyButton,
    showVerticalDivideLine
  } = config

  const { isTextWrap, toggleTextWrap } = useTextWrap(
    config.wrapLongLines ?? false
  )

  const { promptSymbol, showPreTag } = useTerminalMode(
    config.enableTerminalMode,
    config.shellPromptSymbol
  )

  const handleThemeChange = (theme: SimplifiedThemeName) => {
    setTheme(theme)
  }

  const text = (config.children || '') as string
  const { displayedText, lineCount, charCount, isPlaying, togglePlay } =
    useTypeWriter({ text })

  const {
    backgroundColor,
    setBackgroundColor,
    hoverBackgroundColor,
    activeBackgroundColor
  } = useBackgroundStore()

  useEffect(() => {
    if (preRef.current) {
      setBackgroundColor(getPreBgColor())
    }
  }, [darkMode, theme, preRef, getPreBgColor, setBackgroundColor])

  const themeStyle = themeMappings[theme][darkMode ? 'dark' : 'light']

  return (
    <div
      className={clsx(
        'rounded-2xl',
        enableUltraWideMode ? styles['ultra-wide'] : styles['normal-wide'],
        styles['pre-wrapper'],
        allowUserSelect ? styles['allow-select'] : styles['not-select'],
        props.className,
        showScrollBars ? styles['show-scrollbars'] : styles['hide-scrollbars']
      )}
      style={{
        backgroundColor: backgroundColor,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: darkMode ? backgroundColor : ''
      }}
    >
      <CodeHeader
        fileType={originalLang}
        onFileTypeChange={handleFileTypeChange}
        showBookmarksBar={showBookmarksBar}
        toggleTextWrap={toggleTextWrap}
        isTextWrap={isTextWrap}
        config={config}
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
        showExtendedButtons={showExtendedButtons}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        activeBackgroundColor={activeBackgroundColor}
      />
      <RightClickMenu
        showBookmarksBar={showBookmarksBar}
        toggleShowBookmarksBar={toggleShowBookmarksBar}
        hasWatermarkList={watermarkList.length > 0}
        showWatermarks={showWatermarks}
        toggleShowWatermarks={toggleShowWatermarks}
        showLineNumbers={showLineNumbers}
        toggleShowLineNumbers={toggleShowLineNumbers}
        showBottomLine={showBottomLine}
        toggleShowBottomLine={toggleShowBottomLine}
        handleThemeChange={handleThemeChange}
        showExtendedButtons={showExtendedButtons}
        toggleShowExtendedButtons={toggleShowExtendedButtons}
      >
        <CodeContent
          preRef={preRef}
          lang={actualLang}
          themeStyle={themeStyle}
          copyStyle={copyStyle}
          isTextWrap={isTextWrap}
          showPreTag={showPreTag}
          promptSymbol={promptSymbol}
          watermarkList={watermarkList}
          showCopyButton={showCopyButton}
          showWatermarks={showWatermarks}
          showVerticalDivideLine={showVerticalDivideLine}
          showLineNumbers={showLineNumbers}
          showBottomLine={showBottomLine}
          enableTerminalMode={enableTerminalMode}
          allowFullScreen={allowFullScreen}
          enableGlobalHint={enableGlobalHint}
          children={displayedText}
          backgroundColor={backgroundColor}
        />
      </RightClickMenu>
      <CodeFooter
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        activeBackgroundColor={activeBackgroundColor}
        lineCount={lineCount}
        charCount={charCount}
        showBottomLine={showBottomLine}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        darkMode={darkMode}
      />
    </div>
  )
}

export default CodeProvider

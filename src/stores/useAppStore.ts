import { create, type StoreApi, type UseBoundStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'
import configHandler from '@/configs/handler'
import defaultConfig from '@/configs/defaultConfig.json'
import type { CopyStyle } from '@/types'

export interface AppState {
  showBookmarksBar: boolean
  setShowBookmarksBar: (value: boolean) => void
  toggleShowBookmarksBar: () => void

  watermarkList: string[]
  setWatermarkList: (value: string[]) => void
  showWatermarks: boolean
  toggleShowWatermarks: () => void

  showLineNumbers: boolean
  setShowLineNumbers: (value: boolean) => void
  toggleShowLineNumbers: () => void

  enableUltraWideMode: boolean
  setEnableUltraWideMode: (value: boolean) => void
  toggleEnableUltraWideMode: () => void

  showBottomLine: boolean
  setShowBottomLine: (value: boolean) => void
  toggleShowBottomLine: () => void

  showExtendedButtons: boolean
  setShowExtendedButtons: (value: boolean) => void
  toggleShowExtendedButtons: (value: 'open' | 'close') => void

  showScrollBars: boolean
  setShowScrollBars: (value: boolean) => void
  toggleShowScrollBars: () => void

  allowUserSelect: boolean
  setAllowUserSelect: (value: boolean) => void
  toggleAllowUserSelect: () => void

  enableTerminalMode: boolean
  setEnableTerminalMode: (value: boolean) => void
  toggleEnableTerminalMode: () => void

  copyStyle: CopyStyle
  setCopyStyle: (value: CopyStyle) => void
  toggleCopyStyle: () => void
}

const initialConfig = configHandler()

export const useAppStore: UseBoundStore<StoreApi<AppState>> =
  create<AppState>()(
    subscribeWithSelector(
      immer((set) => ({
        showBookmarksBar:
          initialConfig.showBookmarksBar ?? defaultConfig.showBookmarksBar,
        setShowBookmarksBar: (value: boolean) =>
          set((state) => {
            state.showBookmarksBar = value
          }),
        toggleShowBookmarksBar: () =>
          set((state) => {
            state.showBookmarksBar = !state.showBookmarksBar
          }),

        watermarkList:
          initialConfig.watermarkList && initialConfig.watermarkList.length > 0
            ? initialConfig.watermarkList
            : defaultConfig.watermarkList,
        setWatermarkList: (value: string[]) =>
          set((state) => {
            state.watermarkList = value
          }),
        showWatermarks: false,
        toggleShowWatermarks: () =>
          set((state) => {
            state.showWatermarks = !state.showWatermarks
          }),

        showLineNumbers:
          initialConfig.showLineNumbers ?? defaultConfig.showLineNumbers,
        setShowLineNumbers: (value: boolean) =>
          set((state) => {
            state.showLineNumbers = value
          }),
        toggleShowLineNumbers: () =>
          set((state) => {
            state.showLineNumbers = !state.showLineNumbers
          }),

        enableUltraWideMode:
          initialConfig.enableUltraWideMode ??
          defaultConfig.enableUltraWideMode,
        setEnableUltraWideMode: (value: boolean) =>
          set((state) => {
            state.enableUltraWideMode = value
          }),
        toggleEnableUltraWideMode: () =>
          set((state) => {
            state.enableUltraWideMode = !state.enableUltraWideMode
          }),

        showBottomLine:
          initialConfig.showBottomLine ?? defaultConfig.showBottomLine,
        setShowBottomLine: (value: boolean) =>
          set((state) => {
            state.showBottomLine = value
          }),
        toggleShowBottomLine: () =>
          set((state) => {
            state.showBottomLine = !state.showBottomLine
          }),

        showExtendedButtons:
          initialConfig.showExtendedButtons ??
          defaultConfig.showExtendedButtons,
        setShowExtendedButtons: (value: boolean) =>
          set((state) => {
            state.showExtendedButtons = value
          }),
        toggleShowExtendedButtons: (value: 'open' | 'close') =>
          set((state) => {
            if (
              (value === 'open' && !state.showExtendedButtons) ||
              (value === 'close' && state.showExtendedButtons)
            ) {
              state.showExtendedButtons = !state.showExtendedButtons
            }
          }),

        showScrollBars:
          initialConfig.showScrollBars ?? defaultConfig.showScrollBars,
        setShowScrollBars: (value: boolean) =>
          set((state) => {
            state.showScrollBars = value
          }),
        toggleShowScrollBars: () =>
          set((state) => {
            state.showScrollBars = !state.showScrollBars
          }),

        allowUserSelect:
          initialConfig.allowUserSelect ?? defaultConfig.allowUserSelect,
        setAllowUserSelect: (value: boolean) =>
          set((state) => {
            state.allowUserSelect = value
          }),
        toggleAllowUserSelect: () =>
          set((state) => {
            state.allowUserSelect = !state.allowUserSelect
          }),

        enableTerminalMode:
          initialConfig.enableTerminalMode ?? defaultConfig.enableTerminalMode,
        setEnableTerminalMode: (value: boolean) =>
          set((state) => {
            state.enableTerminalMode = value
          }),
        toggleEnableTerminalMode: () =>
          set((state) => {
            state.enableTerminalMode = !state.enableTerminalMode
          }),

        copyStyle:
          initialConfig.copyStyle ?? (defaultConfig.copyStyle as CopyStyle),
        setCopyStyle: (value: CopyStyle) =>
          set((state) => {
            state.copyStyle = value
          }),
        toggleCopyStyle: () =>
          set((state) => {
            state.copyStyle = state.copyStyle === 'inner' ? 'outer' : 'inner'
          })
      }))
    )
  )

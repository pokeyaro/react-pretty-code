import { create, type StoreApi, type UseBoundStore } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { SimplifiedThemeName } from '@/types'

type Language = 'en-US' | 'zh-CN'

type SystemStates = {
  darkMode: boolean
  language: Language
  theme: SimplifiedThemeName
}

type SystemActions = {
  toggleDarkMode: () => void
  setLanguage: (language: Language) => void
  setTheme: (theme: SimplifiedThemeName) => void
}

interface SystemStore {
  states: SystemStates
  actions: SystemActions
}

export const useSystemStore: UseBoundStore<StoreApi<SystemStore>> =
  create<SystemStore>()(
    immer((set) => ({
      states: {
        darkMode: true,
        language: 'en-US',
        theme: 'atom'
      },
      actions: {
        toggleDarkMode: () =>
          set((state) => {
            state.states.darkMode = !state.states.darkMode
          }),
        setLanguage: (language: Language) =>
          set((state) => {
            state.states.language = language
          }),
        setTheme: (theme: SimplifiedThemeName) =>
          set((state) => {
            state.states.theme = theme
          })
      }
    }))
  )

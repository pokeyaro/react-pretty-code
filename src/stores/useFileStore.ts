import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { subscribeWithSelector } from 'zustand/middleware'

type FileStates = {
  label: string
  ext: string
}

type FileActions = {
  setLabel: (label: string) => void
  setExt: (ext: string) => void
  getLabel: () => string
  getExt: () => string
}

interface FileStore {
  states: FileStates
  actions: FileActions
}

export const useFileStore = create<FileStore>()(
  subscribeWithSelector(
    immer((set, get) => ({
      states: {
        label: '',
        ext: ''
      },
      actions: {
        setLabel: (label: string) =>
          set((state) => {
            state.states.label = label
          }),
        setExt: (ext: string) =>
          set((state) => {
            state.states.ext = ext
          }),
        getLabel: () => get().states.label,
        getExt: () => get().states.ext
      }
    }))
  )
)

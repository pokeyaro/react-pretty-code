import type { CodeBlockProps, ThemeName } from '@/types'

export interface CodeContentProps extends CodeBlockProps {
  themeStyle?: ThemeName
  preRef: React.RefObject<HTMLPreElement>
  isTextWrap: boolean
  showPreTag: boolean
  showWatermarks: boolean
  promptSymbol: string
  children: string
  backgroundColor: string
}

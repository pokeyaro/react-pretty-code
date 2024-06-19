import type { CSSProperties } from 'react'

export type Lang =
  | 'plaintext'
  | 'json'
  | 'xml'
  | 'yaml'
  | 'toml'
  | 'markdown'
  | 'log'
  | 'http'
  | 'protobuf'
  | 'graphql'
  | 'python'
  | 'java'
  | 'c'
  | 'cpp'
  | 'csharp'
  | 'go'
  | 'rust'
  | 'php'
  | 'ruby'
  | 'javascript'
  | 'typescript'
  | 'dts'
  | 'jsx'
  | 'tsx'
  | 'react'
  | 'vue'
  | 'svelte'
  | 'mjs'
  | 'cjs'
  | 'mdx'
  | 'swift'
  | 'kotlin'
  | 'dart'
  | 'flutter'
  | 'html'
  | 'css'
  | 'scss'
  | 'less'
  | 'ini'
  | 'env'
  | 'conf'
  | 'gitignore'
  | 'makefile'
  | 'dockerfile'
  | 'kubernetes'
  | 'ansible'
  | 'saltstack'
  | 'gitlab'
  | 'github'
  | 'sql'
  | 'bash'
  | 'shell'
  | 'zsh'
  | 'awk'
  | 'perl'
  | 'powershell'
  | 'cmd'
  | 'bat'
  | 'lua'

export type CopyStyle = 'default' | 'outer' | 'inner'

export type ShellPromptSymbol =
  | '➜ ~'
  | '❯ ~'
  | '❯'
  | '➜'
  | '[root@localhost ~]#'
  | 'root@localhost:~#'
  | 'admin@localhost:~$'
  | 'PS C:\\>'
  | 'C:\\Users\\Administrator>'
  | '>>>'
  | 'sql>'
  | '$'
  | '=>'
  | 'sh-4.4$'

export interface MetadataProps {
  uniqueKey: string
  filename?: string
  title: string
  description?: string
  author?: string
  date?: string
  tags?: string[]
}

export type SimplifiedThemeName =
  | 'a11y'
  | 'atom'
  | 'cave'
  | 'dune'
  | 'gruvbox'
  | 'isbl'
  | 'kimbie'
  | 'obsidian'
  | 'paraiso'
  | 'plateau'
  | 'savanna'
  | 'seaside'
  | 'solarized'
  | 'stackoverflow'
  | 'sulphur'
  | 'tomorrow'

export type ThemeName = {
  [key: string]: CSSProperties
}

export type ThemeMap = {
  [key in SimplifiedThemeName]: {
    light: ThemeName
    dark: ThemeName
  }
}

export interface CodeBlockProps {
  lang?: Lang
  style?: SimplifiedThemeName
  metadata?: MetadataProps
  watermarkList?: string[]
  wrapLongLines?: boolean
  showBookmarksBar?: boolean
  showLineNumbers?: boolean
  showVerticalDivideLine?: boolean
  showBottomLine?: boolean
  showExtendedButtons?: boolean
  showScrollBars?: boolean
  showCopyButton?: boolean
  copyStyle?: CopyStyle
  allowUserSelect?: boolean
  allowFullScreen?: boolean
  enableGlobalHint?: boolean
  enableUltraWideMode?: boolean
  enableTerminalMode?: boolean
  shellPromptSymbol?: string | ShellPromptSymbol
}

export interface BackgroundStyle {
  backgroundColor: string
  hoverBackgroundColor: string
  activeBackgroundColor: string
}

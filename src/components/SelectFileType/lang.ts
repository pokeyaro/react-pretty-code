import { Lang } from '@/types'

export const extensionToLanguageMap: { [key: string]: Lang } = {
  txt: 'plaintext',
  json: 'json',
  xml: 'xml',
  yaml: 'yaml',
  yml: 'yaml',
  toml: 'ini',
  md: 'markdown',
  log: 'log',
  http: 'http',
  proto: 'protobuf',
  graphql: 'graphql',
  py: 'python',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  cs: 'csharp',
  go: 'go',
  rs: 'rust',
  php: 'php',
  rb: 'ruby',
  js: 'javascript',
  ts: 'typescript',
  'd.ts': 'typescript',
  jsx: 'jsx',
  tsx: 'tsx',
  vue: 'vue',
  svelte: 'typescript',
  mjs: 'javascript',
  cjs: 'javascript',
  mdx: 'mdx',
  swift: 'swift',
  kt: 'kotlin',
  dart: 'dart',
  flutter: 'flutter',
  html: 'html',
  css: 'css',
  scss: 'scss',
  less: 'less',
  ini: 'ini',
  env: 'env',
  conf: 'conf',
  cfg: 'conf',
  gitignore: 'gitignore',
  makefile: 'makefile',
  dockerfile: 'dockerfile',
  sls: 'saltstack',
  k8s: 'kubernetes',
  ansible: 'ansible',
  gitlab: 'gitlab',
  github: 'github',
  sql: 'sql',
  bash: 'bash',
  sh: 'bash',
  zsh: 'zsh',
  awk: 'awk',
  pl: 'perl',
  ps1: 'powershell',
  cmd: 'cmd',
  bat: 'bat',
  lua: 'lua'
}

export const langToLanguageMap: { [key in Lang]: Lang } = {
  plaintext: 'plaintext',
  json: 'json',
  xml: 'xml',
  yaml: 'yaml',
  toml: 'ini',
  markdown: 'markdown',
  log: 'plaintext',
  http: 'http',
  protobuf: 'protobuf',
  graphql: 'javascript',
  python: 'python',
  java: 'java',
  c: 'c',
  cpp: 'cpp',
  csharp: 'csharp',
  go: 'go',
  rust: 'rust',
  php: 'php',
  ruby: 'ruby',
  javascript: 'javascript',
  typescript: 'typescript',
  dts: 'typescript',
  jsx: 'javascript',
  tsx: 'typescript',
  react: 'typescript',
  vue: 'html',
  svelte: 'typescript',
  mjs: 'javascript',
  cjs: 'javascript',
  mdx: 'markdown',
  swift: 'swift',
  kotlin: 'kotlin',
  dart: 'dart',
  flutter: 'dart',
  html: 'html',
  css: 'css',
  scss: 'scss',
  less: 'less',
  ini: 'ini',
  env: 'plaintext',
  conf: 'plaintext',
  gitignore: 'plaintext',
  makefile: 'makefile',
  dockerfile: 'dockerfile',
  kubernetes: 'yaml',
  ansible: 'yaml',
  saltstack: 'plaintext',
  gitlab: 'yaml',
  github: 'yaml',
  sql: 'sql',
  bash: 'bash',
  shell: 'bash',
  zsh: 'bash',
  awk: 'awk',
  perl: 'perl',
  powershell: 'powershell',
  cmd: 'plaintext',
  bat: 'plaintext',
  lua: 'lua'
}

export const getLanguage = (
  propsLang: Lang | undefined,
  filename: string | undefined
): { actualLang: Lang; originalLang: Lang } => {
  const supportedLanguages: Set<Lang> = new Set(
    Object.keys(langToLanguageMap) as Lang[]
  )

  if (propsLang && supportedLanguages.has(propsLang)) {
    const actualLang = langToLanguageMap[propsLang]
    return { actualLang, originalLang: propsLang }
  }

  if (filename) {
    const extension = filename.split('.').pop()?.toLowerCase()
    if (extension && extension in extensionToLanguageMap) {
      const lang =
        extensionToLanguageMap[extension as keyof typeof extensionToLanguageMap]
      if (supportedLanguages.has(lang)) {
        const actualLang = langToLanguageMap[lang]
        return { actualLang, originalLang: lang }
      }
    }
  }

  return {
    actualLang: 'plaintext',
    originalLang: 'plaintext'
  }
}

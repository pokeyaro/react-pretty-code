import type { FileTypeGroup } from './types'
import { ASSET_ICON_PATH } from '@/constants'

export const fileTypeList: FileTypeGroup = {
  'Text Files': [
    {
      value: 'plaintext',
      label: 'Plain Text',
      ext: ['.txt'],
      icon: `${ASSET_ICON_PATH}/plaintext.png`
    },
    {
      value: 'json',
      label: 'JSON',
      ext: ['.json'],
      icon: `${ASSET_ICON_PATH}/json.png`
    },
    {
      value: 'xml',
      label: 'XML',
      ext: ['.xml'],
      icon: `${ASSET_ICON_PATH}/xml.png`
    },
    {
      value: 'yaml',
      label: 'YAML',
      ext: ['.yaml', '.yml'],
      icon: `${ASSET_ICON_PATH}/yaml.png`
    },
    {
      value: 'toml',
      label: 'TOML',
      ext: ['.toml'],
      icon: `${ASSET_ICON_PATH}/toml.png`
    },
    {
      value: 'markdown',
      label: 'Markdown',
      ext: ['.md'],
      icon: `${ASSET_ICON_PATH}/markdown.png`
    },
    {
      value: 'log',
      label: 'Log',
      ext: ['.log'],
      icon: `${ASSET_ICON_PATH}/log.png`
    }
  ],

  'API & Protocol Files': [
    {
      value: 'http',
      label: 'HTTP',
      ext: ['.http'],
      icon: `${ASSET_ICON_PATH}/http.png`
    },
    {
      value: 'protobuf',
      label: 'Protocol Buffers',
      ext: ['.proto'],
      icon: `${ASSET_ICON_PATH}/proto.png`
    },
    {
      value: 'graphql',
      label: 'GraphQL',
      ext: ['.graphql'],
      icon: `${ASSET_ICON_PATH}/graphql.png`
    }
  ],

  'Backend Language Files': [
    {
      value: 'python',
      label: 'Python',
      ext: ['.py'],
      icon: `${ASSET_ICON_PATH}/python.png`
    },
    {
      value: 'java',
      label: 'Java',
      ext: ['.java'],
      icon: `${ASSET_ICON_PATH}/java.png`
    },
    { value: 'c', label: 'C', ext: ['.c'], icon: `${ASSET_ICON_PATH}/c.png` },
    {
      value: 'cpp',
      label: 'C++',
      ext: ['.cpp'],
      icon: `${ASSET_ICON_PATH}/cpp.png`
    },
    {
      value: 'csharp',
      label: 'C#',
      ext: ['.cs'],
      icon: `${ASSET_ICON_PATH}/csharp.png`
    },
    {
      value: 'go',
      label: 'Golang',
      ext: ['.go'],
      icon: `${ASSET_ICON_PATH}/golang.png`
    },
    {
      value: 'rust',
      label: 'Rust',
      ext: ['.rs'],
      icon: `${ASSET_ICON_PATH}/rust.png`
    },
    {
      value: 'php',
      label: 'PHP',
      ext: ['.php'],
      icon: `${ASSET_ICON_PATH}/php.png`
    },
    {
      value: 'ruby',
      label: 'Ruby',
      ext: ['.rb'],
      icon: `${ASSET_ICON_PATH}/ruby.png`
    }
  ],

  'Frontend Language Files': [
    {
      value: 'javascript',
      label: 'JavaScript',
      ext: ['.js'],
      icon: `${ASSET_ICON_PATH}/javascript.png`
    },
    {
      value: 'typescript',
      label: 'TypeScript',
      ext: ['.ts'],
      icon: `${ASSET_ICON_PATH}/typescript.png`
    },
    {
      value: 'dts',
      label: 'TypeScript Declaration',
      ext: ['.d.ts'],
      icon: `${ASSET_ICON_PATH}/dts.png`
    },
    {
      value: 'jsx',
      label: 'JavaScript Extensions',
      ext: ['.jsx'],
      icon: `${ASSET_ICON_PATH}/jsx.png`
    },
    {
      value: 'tsx',
      label: 'TypeScript Extensions',
      ext: ['.tsx'],
      icon: `${ASSET_ICON_PATH}/tsx.png`
    },
    {
      value: 'react',
      label: 'React',
      ext: ['.tsx', '.jsx'],
      icon: `${ASSET_ICON_PATH}/react.png`
    },
    {
      value: 'vue',
      label: 'Vue',
      ext: ['.vue'],
      icon: `${ASSET_ICON_PATH}/vue.png`
    },
    {
      value: 'svelte',
      label: 'Svelte',
      ext: ['.svelte'],
      icon: `${ASSET_ICON_PATH}/svelte.png`
    },
    {
      value: 'mjs',
      label: 'ES Module',
      ext: ['.mjs'],
      icon: `${ASSET_ICON_PATH}/mjs.png`
    },
    {
      value: 'cjs',
      label: 'CommonJS Module',
      ext: ['.cjs'],
      icon: `${ASSET_ICON_PATH}/cjs.png`
    },
    {
      value: 'mdx',
      label: 'Markdown + JSX',
      ext: ['.mdx'],
      icon: `${ASSET_ICON_PATH}/mdx.png`
    }
  ],

  'Mobile Development Files': [
    {
      value: 'swift',
      label: 'Swift',
      ext: ['.swift'],
      icon: `${ASSET_ICON_PATH}/swift.png`
    },
    {
      value: 'kotlin',
      label: 'Kotlin',
      ext: ['.kt'],
      icon: `${ASSET_ICON_PATH}/kotlin.png`
    },
    {
      value: 'dart',
      label: 'Dart',
      ext: ['.dart'],
      icon: `${ASSET_ICON_PATH}/dart.png`
    },
    {
      value: 'flutter',
      label: 'Flutter',
      ext: ['.dart'],
      icon: `${ASSET_ICON_PATH}/flutter.png`
    }
  ],

  'Markup Language Files': [
    {
      value: 'html',
      label: 'HTML',
      ext: ['.html'],
      icon: `${ASSET_ICON_PATH}/html.png`
    },
    {
      value: 'css',
      label: 'CSS',
      ext: ['.css'],
      icon: `${ASSET_ICON_PATH}/css.png`
    },
    {
      value: 'scss',
      label: 'SASS',
      ext: ['.scss'],
      icon: `${ASSET_ICON_PATH}/scss.png`
    },
    {
      value: 'less',
      label: 'LESS',
      ext: ['.less'],
      icon: `${ASSET_ICON_PATH}/less.png`
    }
  ],

  'Configuration Files': [
    {
      value: 'ini',
      label: 'INI',
      ext: ['.ini'],
      icon: `${ASSET_ICON_PATH}/ini.png`
    },
    {
      value: 'env',
      label: 'ENV',
      ext: [],
      file: '.env',
      icon: `${ASSET_ICON_PATH}/env.png`
    },
    {
      value: 'conf',
      label: 'Config',
      ext: ['.conf', '.cfg'],
      icon: `${ASSET_ICON_PATH}/config.png`
    },
    {
      value: 'gitignore',
      label: 'Git Ignore',
      ext: [],
      file: '.gitignore',
      icon: `${ASSET_ICON_PATH}/gitignore.png`
    }
  ],

  'Orchestration Files': [
    {
      value: 'makefile',
      label: 'Makefile',
      ext: [],
      file: 'Makefile',
      icon: `${ASSET_ICON_PATH}/makefile.png`
    },
    {
      value: 'dockerfile',
      label: 'Dockerfile',
      ext: [],
      file: 'Dockerfile',
      icon: `${ASSET_ICON_PATH}/docker.png`
    },
    {
      value: 'kubernetes',
      label: 'Kubernetes Manifest',
      ext: ['.yaml', '.yml'],
      icon: `${ASSET_ICON_PATH}/kubernetes.png`
    },
    {
      value: 'ansible',
      label: 'Ansible Playbook',
      ext: ['.yaml', '.yml'],
      icon: `${ASSET_ICON_PATH}/ansible.png`
    },
    {
      value: 'saltstack',
      label: 'SaltStack State',
      ext: ['.sls'],
      icon: `${ASSET_ICON_PATH}/saltstack.png`
    },
    {
      value: 'gitlab',
      label: 'GitLab CI/CD',
      ext: ['.yml'],
      file: '.gitlab-ci.yml',
      icon: `${ASSET_ICON_PATH}/gitlab.png`
    },
    {
      value: 'github',
      label: 'GitHub Actions',
      ext: ['.yml'],
      file: '.github/workflows/ci.yml',
      icon: `${ASSET_ICON_PATH}/github.png`
    }
  ],

  'Database Query Files': [
    {
      value: 'sql',
      label: 'SQL',
      ext: ['.sql'],
      icon: `${ASSET_ICON_PATH}/sql.png`
    }
  ],

  'Scripting Language Files': [
    {
      value: 'bash',
      label: 'Bash',
      ext: ['.bash', '.sh'],
      icon: `${ASSET_ICON_PATH}/bash.png`
    },
    {
      value: 'shell',
      label: 'Shell',
      ext: ['.sh'],
      icon: `${ASSET_ICON_PATH}/shell.png`
    },
    {
      value: 'zsh',
      label: 'Z Shell',
      ext: ['.zsh'],
      icon: `${ASSET_ICON_PATH}/zsh.png`
    },
    {
      value: 'awk',
      label: 'Awk',
      ext: ['.awk'],
      icon: `${ASSET_ICON_PATH}/awk.png`
    },
    {
      value: 'perl',
      label: 'Perl',
      ext: ['.pl'],
      icon: `${ASSET_ICON_PATH}/perl.png`
    },
    {
      value: 'powershell',
      label: 'PowerShell',
      ext: ['.ps1'],
      icon: `${ASSET_ICON_PATH}/powershell.png`
    },
    {
      value: 'cmd',
      label: 'CMD',
      ext: ['.cmd'],
      icon: `${ASSET_ICON_PATH}/cmd.png`
    },
    {
      value: 'bat',
      label: 'Batch',
      ext: ['.bat'],
      icon: `${ASSET_ICON_PATH}/bat.png`
    },
    {
      value: 'lua',
      label: 'Lua',
      ext: ['.lua'],
      icon: `${ASSET_ICON_PATH}/lua.png`
    }
  ]
}

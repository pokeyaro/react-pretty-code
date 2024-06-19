import defaultConfig from '../defaultConfig.json'
import loadUserConfig from './loadUserConfig'
import { deepMerge } from '@/lib/deepMerge'
import type { CodeBlockProps, CopyStyle, SimplifiedThemeName } from '@/types'

const configHandler = (
  userConfig: Partial<CodeBlockProps> = {}
): Partial<CodeBlockProps> => {
  const externalUserConfig = loadUserConfig()

  const enhancedDefaultConfig = (() => {
    const transformedDefaultConfig = {
      ...defaultConfig,
      style: defaultConfig.style as SimplifiedThemeName
    }

    let copyStyle: CopyStyle = 'default'
    if (
      typeof transformedDefaultConfig.copyStyle === 'string' &&
      ['default', 'outer', 'inner'].includes(transformedDefaultConfig.copyStyle)
    ) {
      copyStyle = transformedDefaultConfig.copyStyle as CopyStyle
    }

    return {
      ...transformedDefaultConfig,
      copyStyle
    }
  })()

  const finalConfig = deepMerge(
    enhancedDefaultConfig,
    externalUserConfig,
    userConfig
  ) as CodeBlockProps

  return finalConfig
}

export default configHandler

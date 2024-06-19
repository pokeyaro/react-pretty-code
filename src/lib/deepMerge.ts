/* eslint-disable @typescript-eslint/no-explicit-any */

export const deepMerge = (target: any, ...sources: any[]): any => {
  if (!sources.length) return target
  const source = sources.shift()

  if (target instanceof Object && source instanceof Object) {
    for (const key in source) {
      if (source[key] instanceof Object && target[key] !== undefined) {
        target[key] = deepMerge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    }
  }

  return deepMerge(target, ...sources)
}

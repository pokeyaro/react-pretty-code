import { Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

export function rawMdx(): Plugin {
  return {
    name: 'vite-plugin-raw-mdx',
    transform(_, id) {
      if (id.endsWith('.mdx')) {
        const filePath = path.resolve(id)
        const content = fs.readFileSync(filePath, 'utf-8')
        return {
          code: `export default ${JSON.stringify(content)};`,
          map: null
        }
      }
    }
  }
}

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ASSETS_SRC_DIR = path.join(__dirname, '..', 'src', 'assets')
const ASSETS_DEST_DIR = path.join(process.cwd(), 'public', 'assets')

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath)
    } else {
      await fs.copyFile(srcPath, destPath)
    }
  }
}

async function main() {
  try {
    await copyDirectory(ASSETS_SRC_DIR, ASSETS_DEST_DIR)
    console.log('Assets copied to public/assets')
  } catch (err) {
    console.error('Error copying assets:', err)
  }
}

main()

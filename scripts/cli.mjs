import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ASSETS_SRC_DIR = path.join(__dirname, '..', 'dist', 'assets')
const ASSETS_DEST_DIR = path.join(process.cwd(), 'public', 'assets')

async function copyDirectory(src, dest) {
  try {
    await fs.access(src)
  } catch (error) {
    console.error(`Source directory not found: ${src}`)
    console.error('Please ensure the assets directory exists.')
    return
  }

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

async function copyAssets() {
  try {
    await copyDirectory(ASSETS_SRC_DIR, ASSETS_DEST_DIR)
    console.log('Assets copied to public/assets')
  } catch (err) {
    console.error('Error copying assets:', err)
  }
}

function printHelp() {
  console.log(`
Usage: npx react-pretty-code <command>

Commands:
  init               Initialize the components (Alias for: npx react-pretty-code copy-assets)
  copy-assets        Copy assets to public directory

Options:
  -h, --help         Show this help message
  `)
}

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp()
    return
  }

  const command = args[0]

  switch (command) {
    case 'init':
      await copyAssets()
      break

    case 'copy-assets':
      await copyAssets()
      break

    default:
      console.error(`Unknown command: ${command}`)
      break
  }
}

main()

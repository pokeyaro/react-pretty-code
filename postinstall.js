import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'dist/assets');
const targetDir = path.join(__dirname, '../public/assets');

console.log(`Source Directory: ${srcDir}`);
console.log(`Target Directory: ${targetDir}`);

function copyFiles(src, dest) {
  if (!fs.existsSync(dest)) {
    console.log(`Creating target directory: ${dest}`);
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFiles(srcPath, destPath);
    } else {
      console.log(`Copying file: ${srcPath} to ${destPath}`);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyFiles(srcDir, targetDir);
  console.log('Files copied successfully.');
} catch (error) {
  console.error('Error copying files:', error);
}

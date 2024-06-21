import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源目录和目标目录
const srcDir = path.join(__dirname, 'dist/assets');
const targetDir = path.join(process.cwd(), 'public/assets');

// 日志输出源目录和目标目录
console.log(`Source Directory: ${srcDir}`);
console.log(`Target Directory: ${targetDir}`);

// 复制文件函数
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

// 执行复制操作，并捕获错误
try {
  copyFiles(srcDir, targetDir);
  console.log('Files copied successfully.');
} catch (error) {
  console.error('Error copying files:', error);
}

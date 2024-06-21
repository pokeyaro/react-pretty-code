import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件名和目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 定义源目录（库中的静态资源目录）
const srcDir = path.join(__dirname, 'dist/assets');

// 使用 process.cwd() 获取用户项目的根目录，并结合相对路径设置目标目录
const projectRoot = process.cwd();
const targetDir = path.join(projectRoot, 'public/assets');

// 函数：同步地创建目标目录及其所有父目录
function createDirIfNotExists(dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
}

// 函数：同步地复制文件和目录
function copyFiles(src, dest) {
  // 检查源目录是否存在
  if (!fs.existsSync(src)) {
    throw new Error(`Source directory does not exist: ${src}`);
  }
  
  createDirIfNotExists(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 执行复制操作，并捕获错误
try {
  copyFiles(srcDir, targetDir);
  // 使用 fs.writeFileSync 来写入日志文件，确保日志被记录
  fs.writeFileSync(path.join(projectRoot, 'postinstall.log'), 'Files copied successfully.\n', { flag: 'a' });
} catch (error) {
  fs.writeFileSync(path.join(projectRoot, 'postinstall.log'), `Error copying files: ${error.message}\n`, { flag: 'a' });
}

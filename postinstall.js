import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件名和目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 日志函数：写入日志到 postinstall.log 文件
function log(message) {
  const logFile = path.join(__dirname, 'postinstall.log');
  fs.appendFileSync(logFile, message + '\n');
}

// 定义源目录（库中的静态资源目录）
const srcDir = path.join(__dirname, 'dist/assets');
log(`Source Directory: ${srcDir}`);

// 向上遍历目录结构以找到用户项目的根目录
function findProjectRoot(currentDir) {
  log(`Checking directory: ${currentDir}`);
  const possibleRoot = path.join(currentDir, 'package.json');
  if (fs.existsSync(possibleRoot)) {
    log(`Found project root: ${currentDir}`);
    return currentDir;
  } else {
    const parentDir = path.resolve(currentDir, '..');
    if (parentDir !== currentDir) {
      return findProjectRoot(parentDir);
    } else {
      throw new Error('Could not find project root directory');
    }
  }
}

let projectRoot;
try {
  projectRoot = findProjectRoot(__dirname);
} catch (error) {
  log(`Error finding project root: ${error.message}`);
  process.exit(1);
}
log(`Project Root Directory: ${projectRoot}`);

const targetDir = path.join(projectRoot, 'public/assets');
log(`Target Directory: ${targetDir}`);

// 函数：同步地创建目标目录及其所有父目录
function createDirIfNotExists(dest) {
  if (!fs.existsSync(dest)) {
    log(`Creating directory: ${dest}`);
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
      log(`Copying file from ${srcPath} to ${destPath}`);
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 执行复制操作，并捕获错误
try {
  copyFiles(srcDir, targetDir);
  log('Files copied successfully.');
} catch (error) {
  log(`Error copying files: ${error.message}`);
}

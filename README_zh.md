# 欢迎使用 react-pretty-code 👏👏👏

## 背景

这是一个精心打造的项目，希望它能在某种程度上对你有所帮助。当然，它仍有许多需要改进的地方。我希望随着时间的推移，能不断加强和完善它。您的支持是无价的，如果你有兴趣，欢迎通过 PR 进行贡献。谢谢！

[View in English](./README.md)

## 介绍

> 不仅仅是一个 `CodeBlock`。

主要使用 `React`、`Tailwind` 和 `Shadcn/ui` 构建。利用 `react-syntax-highlighter` 库的强大功能，提供语法高亮支持。

使用 `TypeScript` 编写，为用户提供类型安全和便利。

## 功能

- 行号显示
- 自动换行显示
- 超宽显示
- 文本复制
- 水印功能
- 下载功能
- 自定义默认配置文件
- 右键菜单
- 文件类型选择
- 无头模式
- 命令行模式
- 元数据支持
- 底部统计行
- 打字机播放
- 多种主题样式
- 暗模式
- 边框着色
- 扩展控件按钮组

## 如何操作

![演示](public/operate.gif)

## 在线演示

https://rpc-react-live-demo.vercel.app/

## 安装

1. 安装 `react-pretty-code`：

```bash
# 通过 npm
npm i react-pretty-code

# 通过 yarn
yarn add react-pretty-code

# 通过 pnpm
pnpm add react-pretty-code
```

2. 初始化资源：

```bash
# 通过 npx
npx react-pretty-code init
```

_安装警告说明_

在安装过程中，您可能会看到以下警告：

```bash
Peer dependencies that should be installed:
  tailwindcss@">=3.0.0 || insiders"
```

此警告是由于内部依赖使用了 `tailwindcss-animate`。但这个警告可以忽略，因为它不影响 `react-pretty-code` 的功能。

## 使用

> 更详细完整的 `React` 示例代码，请查阅这个 [rpc-react-demo](https://gitlab.com/pokeya/rpc-react-demo) 仓库！

```javascript
import { CodeBlock } from 'react-pretty-code'

const MyCodeComponent = (props) => {
  return (
    <CodeBlock lang='html' metadata={props.metadata}>
      {props.content}
    </CodeBlock>
  )
}

export default MyCodeComponent
```

提示：这虽然是一个 `React` 组件库，如果您是 `Vue` 用户，可以查阅[rpc-vue-demo](https://gitlab.com/pokeya/rpc-vue-demo) 进行集成。

## 贡献

我热烈欢迎您的贡献！如果您发现任何需要改进的地方或遇到任何问题，请随时提交 `PRs`。我非常感谢包含测试用例的 `bug` 修复或增强功能的贡献。

此外，我也非常愿意听取您对 `ReactPrettyCode` 的意见。请随时通过 `issue` 或邮件与我联系。您的反馈对我来说非常宝贵。

## 创建者

Pokeya (pokeya.mystic@gmail.com)

## 许可证

ReactPrettyCode 在 MIT 许可下发布，请参阅 LICENSE 文件。

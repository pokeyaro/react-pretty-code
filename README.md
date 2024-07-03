# Welcome to react-pretty-code 👏👏👏

## Background

This is a meticulously crafted project, created with the hope that it can assist you in some way. Of course, there are still many areas for improvement. I aspire to strengthen and enhance it over time. Your support is invaluable, and if you're interested, your contributions via PRs are warmly welcomed. Thank you!

[查看中文文档](./README_zh.md)

## Introduce

> More Than Just a `CodeBlock`.

Built primarily with `React`, `Tailwind` and `Shadcn/ui`. It leverages the power of the `react-syntax-highlighter` library for syntax highlighting support.

Written in `TypeScript`, providing type safety and convenience for users.

## Feature

- Line Number Display
- Line Wrap Display
- Ultra-Wide Display
- Text Copy
- Watermark Functionality
- Download Functionality
- Custom Default Config File
- Right-Click Menu
- File Type Selection
- Headless Mode
- Command Line Mode
- Metadata Support
- Bottom Line Statistics
- Typewriter Playback
- Multiple Theme Styles
- Dark Mode
- Border Shader
- Extended Widget Button Groups

## How to operate

![demo](public/operate.gif)

## Live Demo

https://rpc-react-live-demo.vercel.app/

## Installation

1. To install `react-pretty-code`, you can use the following command:

```bash
# via npm
npm i react-pretty-code

# via yarn
yarn add react-pretty-code

# via pnpm
pnpm add react-pretty-code
```

2. Initializing Resources:

```bash
# via npx
npx react-pretty-code init
```

_Note on Installation Warnings_

You may see the following warning during installation:

```bash
Peer dependencies that should be installed:
  tailwindcss@">=3.0.0 || insiders"
```

This warning is due to an internal dependency utilizing `tailwindcss-animate`. However, this warning can be ignored as it does not impact the functionality of `react-pretty-code`.

## Usage

> For more detailed and complete example code, please refer to this [rpc-react-demo](https://gitlab.com/pokeya/rpc-react-demo) repository!

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

## Contribution

I warmly welcome your contributions! If you identify any areas for improvement or encounter any issues you'd like to address, please feel free to submit a pull request. I greatly appreciate contributions that include test cases for bug fixes or enhancements.

Additionally, I am keen to hear your thoughts on ReactPrettyCode. Don't hesitate to open an issue or drop me an email. Your feedback is invaluable to me.

## Creator

Pokeya (pokeya.mystic@gmail.com)

## License

ReactPrettyCode released under MIT license, refer LICENSE file.

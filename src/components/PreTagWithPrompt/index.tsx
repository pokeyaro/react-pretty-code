import { extractText } from './helper'
import type { ReactElement } from 'react'
import type { PreTagWithPromptProps } from './types'

const PreTagWithPrompt: React.FC<PreTagWithPromptProps> = ({
  children,
  promptSymbol,
  textColor
}) => {
  let codeString = ''

  if (
    children &&
    children.props &&
    children.props.children &&
    Array.isArray(children.props.children[1])
  ) {
    const codeElements = children.props.children[1]
    codeElements.forEach((elem: ReactElement) => {
      if (elem.props && elem.props.children) {
        codeString += extractText(elem)
      }
    })
  }

  const codeLines = codeString.split('\n')

  return (
    <pre
      style={{
        display: 'block',
        padding: '20px 0',
        margin: '0 20px',
        overflowX: 'auto',
        background: 'inherit',
        color: textColor,
        border: 'none'
      }}
    >
      {codeLines.map((line, i) => (
        <div key={i} style={{ display: 'flex' }}>
          <span style={{ color: '#74de43', marginRight: '8px' }}>
            {promptSymbol}
          </span>
          <span>{line}</span>
        </div>
      ))}
    </pre>
  )
}

export default PreTagWithPrompt

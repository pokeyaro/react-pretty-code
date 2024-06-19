import React from 'react'

export const extractText = (node: React.ReactElement): string => {
  if (typeof node === 'string') {
    return node
  }
  if (node.props && Array.isArray(node.props.children)) {
    return node.props.children.map(extractText).join('')
  }
  return ''
}

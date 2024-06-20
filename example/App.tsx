import React from 'react'
import CodeBlock from '../src/index'
import ContentWithMarkup from './pages/ContentWithMarkup.mdx'
import ContentWithJson from './pages/ContentWithJson.mdx'
import { Content, Metadata } from './pages/ContentWithJs'

const App: React.FC = () => {
  return (
    <div className='w-full'>
      <section className='flex flex-col items-center justify-evenly'>
        <h1 className='text-2xl'>Content With Javascript</h1>
        <CodeBlock className='mt-20' lang='html' metadata={Metadata}>
          {Content}
        </CodeBlock>
      </section>
      <section className='flex flex-col items-center justify-evenly'>
        <h1 className='text-2xl'>Content With Json Syntax</h1>
        <CodeBlock className='mt-20' lang='python'>
          {ContentWithJson}
        </CodeBlock>
      </section>
      <section className='flex flex-col items-center justify-evenly'>
        <h1 className='text-2xl'>Content With Markup Syntax</h1>
        <CodeBlock className='mt-20' lang='kubernetes'>
          {ContentWithMarkup}
        </CodeBlock>
      </section>
    </div>
  )
}

export default App

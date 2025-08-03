import { useState } from 'react'
import Content from './Content.jsx'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Curriculum Vitae</h1>
        <button className='print' onClick={() => window.print()}>Print</button>
      </header>
      <Content></Content>
    </>
  )
}

export default App

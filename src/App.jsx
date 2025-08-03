import { useState } from 'react'
import Content from './content.jsx'
import PrintIcon from '@mui/icons-material/Print'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>Curriculum Vitae</h1>
        <button className='print' onClick={() => window.print()}><p>Print</p><PrintIcon></PrintIcon></button>
      </header>
      <Content></Content>
    </>
  )
}

export default App

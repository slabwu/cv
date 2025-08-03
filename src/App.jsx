import { useState } from 'react'
import Content from './Content.jsx'
import './App.css'

function App() {
  const [details, setDetails] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "88129302",
    country: "SG",
  });

  return (
    <>
      <h1>Curriculum Vitae</h1>
      <Content details={details} setDetails={setDetails}></Content>
    </>
  )
}

export default App

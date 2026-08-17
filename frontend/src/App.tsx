import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>This is my interface of chatify</h1>
      <input type='text' placeholder='write the name frist' className='bg-red-500'/>
    </>
  )
}

export default App

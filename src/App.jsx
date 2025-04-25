import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Busca from './components/Busca'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Busca/>
      
    </>
  )
}

export default App

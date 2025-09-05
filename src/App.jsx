import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllInOneTools from './allinone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>usmanlai</h2>
      <AllInOneTools/>
    </>
  )
}

export default App;

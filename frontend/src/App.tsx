import { useState } from 'react'
import Game from './pages/Game'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <Game /> */}
    </>
  )
}

export default App

import { useState } from 'react'
import Game from './pages/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Game />
    </>
  )
}

export default App

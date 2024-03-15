import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Game from './pages/Game'
import Home from './pages/Home'

function App() {
  return (
    <div className="bg-slate-700">
      <Router>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/game" element={ <Game /> } />
          </Routes>
      </Router>
    </div>
  )
}

export default App

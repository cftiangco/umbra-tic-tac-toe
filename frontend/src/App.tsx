import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Game from './pages/Game'
import Home from './pages/Home'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-700">
      
      <Header />

      <Router>
          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/game" element={ <Game /> } />
          </Routes>
      </Router>

      <Footer/>
      
    </div>
  )
}

export default App

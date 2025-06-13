
import { Route, Routes } from "react-router-dom"

import Gta6Page from "./pages/Gta6Page"
import HomePage from "./pages/HomePage"
import SigninPage from "./pages/SigninPage"

import Games from "./pages/navPages/Games"
import Newswire from "./pages/navPages/Newswire"
import Videos from "./pages/navPages/Videos"
import Downloads from "./pages/navPages/Downloads"
import GameLauncher from "./pages/navPages/GameLauncher"



function App() {

  return (
    <div className="min-h-screen  flex  relative overflow-hidden ">
      
      <Routes>
      <Route path="/GTA6" element={<Gta6Page />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SigninPage />} />

      <Route path="Games" element={<Games />} />
      <Route path="Newswire" element={<Newswire />} />
      <Route path="Videos" element={<Videos />} />
      <Route path="Downloads" element={<Downloads />} />
      <Route path="game-launcher" element={<GameLauncher />} />

      </Routes>
      
    </div>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import GameSpaceWar from "./pages/games/space_war";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/spacewar" element={<GameSpaceWar />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes >
    </Router >
  );
}

export default App;

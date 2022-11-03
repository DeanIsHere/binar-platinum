import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import GameSpaceWar from "./pages/games/space_war";
import Profile from "./pages/profile/Profile";
import GameDetail from "./pages/GameDetail";
import Register from "./pages/register";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/spacewar" element={<GameSpaceWar />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/detail/:game" element={<GameDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit_profile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

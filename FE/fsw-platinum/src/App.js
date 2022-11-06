import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authFirebase } from "./config/firebase";

import "./App.css";
import Home from "./pages/home";
import GameSpaceWar from "./pages/games/space_war";
import Profile from "./pages/profile/Profile";
import GameDetail from "./pages/GameDetail";
import Register from "./pages/register";
import EditProfile from "./pages/EditProfile";
import GameRPS from "./pages/games/rock_paper_scissors";

function App() {
  const dispatch = useDispatch();
  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = authFirebase.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            user,
          },
        });
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/spacewar" element={<GameSpaceWar />} />
        <Route path="/game/game_rps" element={<GameRPS />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/detail/:id" element={<GameDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit_profile/:id" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

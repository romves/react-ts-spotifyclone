import { useEffect, useContext } from "react";
import Login from "./components/Login";
import { StateContext } from "./utils/StateProviders";
import { reducerCases } from "./utils/reducer";
import SpotifyLayout from "./components/layout/SpotifyLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Playlist from "./components/pages/Playlist";
import Search from "./components/pages/Search";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem("token", token);
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {localStorage.getItem("token") ? (
            <Route element={<SpotifyLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/playlist">
                <Route index element={<Playlist />} />
                <Route path=":id" element={<Playlist />} />
              </Route>
              <Route path="/search" element={<Search />} />
            </Route>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;

import React from "react";
import PokemonBattle from "./PokemonsBattle";
import PokemonInfoPage from "./PokemonInfoPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/pokemon-battle" element={<PokemonBattle />} />

          <Route path="/*" element={<PokemonInfoPage />} />
        </Routes>
      </Router>{" "}
    </>
  );
}

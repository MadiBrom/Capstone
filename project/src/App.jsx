import React from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import City from "./pages/City";
import Graveyard from "./pages/Graveyard";
import Tree from "./pages/Tree";
import "./App.css";
import Characters from "./pages/Characters";
import SingleCharacter from "./pages/SingleCharacter";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character" element={<SingleCharacter />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/city" element={<City />} />
        <Route path="/graveyard" element={<Graveyard />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

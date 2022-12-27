import React from "react";
import Activities from "./components/Activities";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";


function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
    </div>
  );
}

export default App;

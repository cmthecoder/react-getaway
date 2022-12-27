import React from "react";
import Activities from "./components/Activities";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Hero />
      <Activities />
      <Booking />
    </div>
  );
}

export default App;

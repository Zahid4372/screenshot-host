import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import FilterBar from "./components/FilterBar";
import Recent from "./components/Recent";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Navbar />
      <Hero />
      <Featured />
      <FilterBar />
      <Recent />
    </div>
  );
}

export default App;
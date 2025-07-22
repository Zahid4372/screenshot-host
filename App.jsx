import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import FilterBar from './components/FilterBar';
import Recent from './components/Recent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FilterBar />
      <Featured />
      <Recent />
    </div>
  );
}

export default App;
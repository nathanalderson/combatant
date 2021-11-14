import './App.css';
import Details from './Details.js'
import MonsterList from './MonsterList.js'
import React, { useState, useEffect } from 'react';

function App() {
  const [selected, updateSelected] = useState({});

  return (
    <div className="App">
      <MonsterList updateSelected={updateSelected} />
      <Details selected={selected} />
    </div>
  );
}

export default App;

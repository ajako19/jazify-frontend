import React from 'react';
import './App.css';
import BottomContent from './components/BottomContent';
import Library from './components/Library';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <Library/>
    </div>
  );
}

export default App;

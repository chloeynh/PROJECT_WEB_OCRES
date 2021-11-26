import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
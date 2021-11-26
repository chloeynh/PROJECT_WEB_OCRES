import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <div className="others">widget</div>
      </div>
      
      
    </div>
  );
}

export default App;
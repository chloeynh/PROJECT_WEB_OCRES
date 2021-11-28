import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
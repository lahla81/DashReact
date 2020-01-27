import React from 'react';
import './App.css';
import SideBar from '../components/SidBar/SidBar';
import Content from '../components/Content';

function App() {
  return (
    <div className="wrapper main-page font-body">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;

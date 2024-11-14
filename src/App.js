import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskBoard from './components/TaskBoard';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <TaskBoard />
    </div>
  );
}

export default App;

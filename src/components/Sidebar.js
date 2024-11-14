import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Task Manager</h2>
      <ul>
        <li>Dashboard</li>
        <li>Tasks</li>
        <li>Teams</li>
        <li>Messages</li>
        <li>Calendar</li>
      </ul>
    </div>
  );
};

export default Sidebar;

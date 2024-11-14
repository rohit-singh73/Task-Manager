import React from 'react';
import '../styles/Filters.css';

const Filters = ({ selectedPriority, setSelectedPriority, selectedStatus, setSelectedStatus }) => {
  return (
    <div className="filters">
      <select value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)}>
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="In Review">In Review</option>
      </select>
    </div>
  );
};

export default Filters;

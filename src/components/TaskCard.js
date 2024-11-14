import React from 'react';
import '../styles/TaskCard.css';

const TaskCard = ({ task, onDelete, onEdit, onMarkDone }) => {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <div className="task-info">
        <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
        <span className="status">{task.status}</span>
      </div>
      <div className="task-due">
        <p>Due Date: {task.dueDate}</p>
        <p>Time: {task.time}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onMarkDone(task.id)} disabled={task.status === 'Done'}>
          {task.status === 'Done' ? 'Completed' : 'Mark as Done'}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;

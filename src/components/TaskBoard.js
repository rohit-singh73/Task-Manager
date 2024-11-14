import React, { useState } from 'react';
import TaskCard from './TaskCard';
import '../styles/TaskBoard.css';
import Modal from './Modal';
import Filters from './Filters';
import SearchBar from './SearchBar';
import useLocalStorage from '../utils/useLocalStorage';

const TaskBoard = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [showModal, setShowModal] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddOrUpdateTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, task]);
    }
    setTaskToEdit(null);
    setShowModal(false);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleMarkDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: 'Done' } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };
  // Filtering and Searching
  const filteredTasks = tasks.filter((task) => {
    return (
      (selectedPriority === '' || task.priority === selectedPriority) &&
      (selectedStatus === '' || task.status === selectedStatus) &&
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="task-board">
      <h2>Team Tasks</h2>
      <button onClick={() => setShowModal(true)}>+ Create Task</button>

      {/* Search Bar & Filters */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />

      {/* Task Columns */}
      <div className="columns">
        {['To Do', 'In Progress', 'In Review'].map((status) => (
          <div key={status} className="column">
            <h3>{status}</h3>
            {filteredTasks
              .filter((task) => task.status === status)
              .map((task) => (
                <TaskCard 
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onMarkDone={handleMarkDone}
                onEdit={handleEditTask}
                />
              ))}
          </div>
        ))}
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} onSave={handleAddOrUpdateTask} />}
    </div>
  );
};

export default TaskBoard;

import React, { useState, useEffect } from 'react';
import '../styles/Modal.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Modal = ({ onClose, onSave, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [dueDate, setDueDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setStatus(taskToEdit.status);
      setDueDate(new Date(taskToEdit.dueDate));
      setTime(new Date(`1970-01-01T${taskToEdit.time}`));
    }
  }, [taskToEdit]);

  const handleSave = () => {
    if (!title || !dueDate || !time) {
      alert('Please fill out all required fields.');
      return;
    }

    const updatedTask = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
      priority,
      status,
      dueDate: dueDate.toISOString().split('T')[0],
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    onSave(updatedTask);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{taskToEdit ? 'Edit Task' : 'Create Task'}</h3>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="In Review">In Review</option>
          <option value="Done">Done</option>
        </select>

        <label>Due Date:</label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
        />

        <label>Time:</label>
        <DatePicker
          selected={time}
          onChange={(time) => setTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />

        <div className="modal-buttons">
          <button onClick={handleSave}>{taskToEdit ? 'Update' : 'Save'}</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editedTask, setEditedTask] = useState(null);

  // Function to handle adding or editing a task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      if (editedTask !== null) {
        const updatedTasks = [...tasks];
        updatedTasks[editedTask] = {
          text: newTask,
          completed: tasks[editedTask].completed,
        };
        setTasks(updatedTasks);
        setEditedTask(null);
      } else {
        // How is it adding the new task to the top of the list?
        // The code is using the spread operator to create a new array with the new task added to the beginning of the existing tasks array.
        setTasks([{ text: newTask, completed: false }, ...tasks]);
      }
      setNewTask('');
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Function to handle setting a task for editing
  const handleEditTask = (index) => {
    setEditedTask(index);
    setNewTask(tasks[index].text);
  };

  // Function to handle Enter key press for adding/editing tasks
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div style={styles.container}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Add/Edit a Task"
          onChange={(e) => setNewTask(e.target.value)}
          onKeyUp={handleKeyPress}
          style={styles.input}
        />
        <button type="button" onClick={handleAddTask} style={styles.button}>
          {editedTask !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            style={styles.listItem}>
            <span>{task.text}</span>
            <div>
              <button
                onClick={() => handleEditTask(index)}
                style={styles.editButton}>
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                style={styles.deleteButton}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    color: 'white',
  },
  input: {
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#5cb85c',
    color: 'white',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  listItem: {
    margin: '10px 0',
    backgroundColor: '#444',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
  },
  editButton: {
    marginRight: '5px',
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#f0ad4e',
    color: 'white',
  },
  deleteButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#d9534f',
    color: 'white',
  },
};

export default App;

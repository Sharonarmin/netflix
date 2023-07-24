import React, {useState} from 'react'
import './toDo.css'

function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
      if (taskInput.trim() !== '') {
        setTasks([...tasks, { text: taskInput, completed: false }]);
        setTaskInput('');
      }
    };
  
    const removeTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };
  
    const toggleTaskCompletion = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    };
  
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="input-container">
          <input type="text" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <span  className={task.completed ? 'completed' : ''} onClick={() => toggleTaskCompletion(index)} >
                {task.text}
              </span>
              <button onClick={() => removeTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default ToDo

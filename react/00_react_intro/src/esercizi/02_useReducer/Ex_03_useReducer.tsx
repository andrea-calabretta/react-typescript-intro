/* eslint-disable no-case-declarations */
import React, { useReducer } from 'react';

interface ITask {
  id: number;
  text: string;
  completed: boolean;
}

interface ITasksState {
  tasks: ITask[];
}

type Action =
  | { type: 'addTask'; payload: string }
  | { type: 'removeTask'; payload: number } // id della task da rimuovere
  | { type: 'toggleTask'; payload: number }; // id della task da contrassegnare

const tasksReducer = (state: ITasksState, action: Action): ITasksState => {
  switch (action.type) {
    case 'addTask':
      const newTask: ITask = { id: Date.now(), text: action.payload, completed: false };
      return { tasks: [...state.tasks, newTask] };

    case 'removeTask':
      return { tasks: state.tasks.filter(task => task.id !== action.payload) };

    case 'toggleTask':
      return {
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };

    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(tasksReducer, { tasks: [] });
  const [taskInput, setTaskInput] = React.useState('');

  const addTask = () => {
    if (taskInput.trim() === '') return; // evita l'aggiunta di task vuoti
    dispatch({ type: 'addTask', payload: taskInput });
    setTaskInput(''); // svuota il campo di input
  };

  const removeTask = (id: number) => {
    dispatch({ type: 'removeTask', payload: id });
  };

  const toggleTask = (id: number) => {
    dispatch({ type: 'toggleTask', payload: id });
  };

  return (
    <div>
      <h2>Lista di Attività</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Aggiungi una nuova attività"
      />
      <button onClick={addTask}>Aggiungi</button>
      <ul>
        {state.tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>✔️</button>
            <button onClick={() => removeTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

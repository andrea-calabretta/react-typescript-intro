import { useState } from "react";

// Componente genitore
const TodoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks((prevTasks) => [...prevTasks, task]); // Aggiunge il nuovo task alla lista
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

// Componente figlio per aggiungere attività
interface IAddTaskForm {
  addTask: (task: string) => void;
}

const AddTaskForm = ({ addTask }: IAddTaskForm) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue); // Invia il valore dell'input al genitore
      setInputValue(""); // Resetta il campo di input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default  TodoList;
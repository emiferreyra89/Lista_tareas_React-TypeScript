import { useState } from "react";
import { ListTask } from "./ListTask";

export const ToDoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTask, setListTask] = useState<string[]>([]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setListTask((taskPrevious) => [...taskPrevious, newTask]);
    setNewTask("");
  };
  const removeTask = (index: number) => {
    setListTask((taskActualy) => taskActualy.filter((_,i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div className="div-add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button onClick={addTask}>Agregar tarea</button>
      </div>
      <ListTask taskList={listTask} deleteTask={removeTask} />
    </div>
  );
};

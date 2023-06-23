import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-emerald-100 p-10 mb-4">
        <h1 className="text-2xl font-bold text-gray-600 mb-3">Crea tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-white p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escriba una descripción para la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white p-3 w-full mb-2"
          value={description}
        ></textarea>
        <button className="bg-emerald-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

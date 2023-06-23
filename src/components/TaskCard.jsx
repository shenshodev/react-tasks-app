import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-sky-100 text-gray-600 p-4 rounded-md">
      <h1 className="text-lg font-bold capitalize">{task.title}</h1>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <button
        className="text-white bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;

import { useState } from "react";

export default function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-sm">
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">My Todo List</h1>
          <p className="text-sm text-gray-500 mt-1">Keep Track your daily tasks.</p>
        </div>

        
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter a new Task.."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-1 border border-gray-300 rounded-full py-2 px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-slate-800"
          />
          <button
            onClick={addTask}
            className="bg-[#2d3748] hover:bg-slate-800 text-white text-sm font-medium py-2 px-5 rounded-full transition-colors"
          >
            Add
          </button>
        </div>

        
        <div className="bg-gray-50/70 rounded-xl p-3">
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between py-1 px-1"
              >
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-4 h-4 rounded border-gray-300 text-slate-800 focus:ring-0 cursor-pointer"
                  />
                  <span
                    className={`text-sm text-gray-800 ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </label>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-700 hover:text-red-800 text-sm font-normal transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
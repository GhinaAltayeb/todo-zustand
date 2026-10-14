
import { useTodoStore } from "./store/todoStore";
import AddTaskForm from "./components/AddTaskForm";
import TaskFilters from "./components/TaskFilters";
import TaskList from "./components/TaskList";
import { useState } from "react";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  const {
    tasks,
  } = useTodoStore();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.isCompleted;
    if (filter === "completed") return task.isCompleted;

    return true;
  });

  return (
    <div className="app mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        My Todo List
      </h1>

      <AddTaskForm />

      <TaskFilters
        setFilter={setFilter}
      />

      <TaskList
        tasks={filteredTasks}
      />
    </div>
  );
}

export default App;

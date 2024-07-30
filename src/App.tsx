import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import { Task, statuses } from "./utils/task";
import data from "./data.json";
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const columns = statuses.map((s) => {
    const taskInColumn = tasks.filter((t) => t.status === s);
    return {
      status: s,
      tasks: taskInColumn,
    };
  });
  const updateTaskTitle = (title: string, id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title } : task
    );
    setTasks(updatedTasks);
  };
  useEffect(() => {
    setTasks(data.tasks);
  }, []);

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h1>{column.status}</h1>
          {column.tasks.map((task) => (
            <TaskCard task={task} updateTaskTitle={updateTaskTitle} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

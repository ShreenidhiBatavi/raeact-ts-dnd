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

  useEffect(() => {
    setTasks(data.tasks);
  }, []);

  return (
    <div className="flex divide-x">
      {columns.map((column) => (
        <div>
          <h1>{column.status}</h1>
          {column.tasks.map((task) => (
            <TaskCard task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;

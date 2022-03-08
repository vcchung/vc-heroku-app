import React, { FC, useEffect, useState } from "react";
import axios from "axios";

interface Task {
  id: string;
  summary: string;
  updatedAt: Date;
}

const TaskTable: FC = () => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);
  useEffect(() => {
    axios.get<Array<Task>>("/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  if (!tasks) {
    return null;
  }
  return (
    <>
      {tasks.map((task) => {
        return renderTask(task);
      })}
    </>
  );
};

const renderTask = (task: Task) => {
  return (
    <div>
      <span>{task.id}</span>
      <span>{task.summary}</span>
      <span>{task.updatedAt}</span>
    </div>
  );
};

export default TaskTable;

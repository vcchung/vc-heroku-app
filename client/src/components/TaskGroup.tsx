import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, createTask } from "../api/TaskApi";
import Task from "../model/Task";
import TaskCreateInput from "../model/TaskCreateInput";
import TaskInput from "./TaskInput";
import TaskTable from "./TaskTable";

const TaskGroup = () => {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  useEffect(() => {
    refreshTasksHandle();
  });

  const refreshTasksHandle = () => {
    return getTasks().then((response) => setTasks(response.data));
  };
  const deleteTaskHandle = (taskId: string) => {
    return deleteTask(taskId).then(() => refreshTasksHandle());
  };

  const createTaskHandle = (taskCreateInput: TaskCreateInput) => {
    return createTask(taskCreateInput).then(() => refreshTasksHandle());
  };

  return (
    <>
      <TaskTable tasks={tasks} deleteTaskHandle={deleteTaskHandle} />
      <TaskInput createTaskHandle={createTaskHandle} />
    </>
  );
};

export default TaskGroup;

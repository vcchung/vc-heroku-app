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
  }, []);

  const refreshTasksHandle = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const updateTaskHandle =
    (callApiFunc: Function) => async (arg: string | TaskCreateInput) => {
      await callApiFunc(arg);
      refreshTasksHandle();
    };

  const deleteTaskHandle = updateTaskHandle(deleteTask);

  const createTaskHandle = updateTaskHandle(createTask);

  return (
    <>
      <TaskTable tasks={tasks} deleteTaskHandle={deleteTaskHandle} />
      <TaskInput createTaskHandle={createTaskHandle} />
    </>
  );
};

export default TaskGroup;

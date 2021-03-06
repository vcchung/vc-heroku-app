import axios from "axios";
import Task from "../model/Task";
import TaskCreateInput from "../model/TaskCreateInput";

export const getTasks = (): Promise<Task[]> => {
  return axios.get<Task[]>("/api/tasks").then((response) => response.data);
};

export const deleteTask = (taskId: string) => {
  return axios.delete(`/api/tasks/${taskId}`);
};

export const createTask = (taskCreateInput: TaskCreateInput) => {
  return axios.post("/api/tasks", taskCreateInput);
};

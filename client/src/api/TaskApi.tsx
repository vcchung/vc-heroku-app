import axios from "axios";
import Task from "../model/Task";

export const getTasks = () => {
  return axios.get<Array<Task>>("/api/tasks");
};

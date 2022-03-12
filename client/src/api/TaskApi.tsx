import axios from "axios";
import { Task } from "../components/TaskTable";

export const getTasks = () => {
  return axios.get<Array<Task>>("/api/tasks");
};

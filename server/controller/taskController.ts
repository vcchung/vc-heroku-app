import { Request, Response } from "express";
import Task, { ITask } from "../model/task";

const getAllTasks = async (reqeust: Request, response: Response) => {
  const tasks = await Task.find({}).exec();
  response.status(200).json(tasks);
};

export default { getAllTasks };

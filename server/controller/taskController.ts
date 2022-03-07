import { Request, Response } from "express";
import mongoose from "mongoose";
import Task, { ITask } from "../model/task";

const getAllTasks = (_: Request, response: Response) => {
  Task.find()
    .exec()
    .then((results) => response.status(200).json(results))
    .catch((ex) => console.error(ex));
};

const createTask = (request: Request, response: Response) => {
  const { summary } = request.body;
  const task: ITask = new Task({
    id: new mongoose.Types.ObjectId(),
    summary,
    updatedAt: new Date(),
  });
  task
    .save()
    .then((results) => response.status(200).json(results))
    .catch((ex) => console.error(ex));
};

export default { getAllTasks, createTask };

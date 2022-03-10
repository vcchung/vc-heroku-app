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
  const { summary, type } = request.body;
  const task: ITask = new Task({
    _id: new mongoose.Types.ObjectId(),
    summary,
    type,
    updatedAt: new Date(),
  });
  task
    .save()
    .then((results) => response.status(200).json(results))
    .catch((ex) => console.error(ex));
};

const deleteTask = (request: Request, response: Response) => {
  const { id } = request.params;
  console.log(`id to delete is ${id}`);
  Task.findByIdAndRemove(new mongoose.Types.ObjectId(id))
    .then((task) => {
      console.log(`deleted ${JSON.stringify(task)}`);
      response.status(200).json(task);
    })
    .catch((ex) => {
      response.status(500).json({ error: ex });
    });
};

export default { getAllTasks, createTask, deleteTask };

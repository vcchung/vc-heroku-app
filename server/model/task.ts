import { Document, Schema, Model, model } from "mongoose";

export interface ITask extends Document {
  _id: string;
  summary: string;
  updatedAt: Date;
}

const TaskSchema = new Schema({
  _id: { type: String, required: true },
  summary: { type: String, required: true },
  updatedAt: { type: Date, required: true },
});

const Task: Model<ITask> = model("Task", TaskSchema);
export default Task;

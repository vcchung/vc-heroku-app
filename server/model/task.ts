import { Document, Schema, Model, model } from "mongoose";

export interface ITask extends Document {
  id: string;
  summary: string;
  updatedAt: Date;
}

const TaskSchema = new Schema({
  id: { type: String, required: true },
  summary: { type: String, required: true },
  updatedAt: { type: Date, required: true },
});

const Task: Model<ITask> = model("Task", TaskSchema);
export default Task;

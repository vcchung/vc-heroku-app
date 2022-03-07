import express from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import taskRouter from "./router/taskRouter";

dotenv.config();

mongoose
  .connect(`${process.env.MONGODB_CONNECT_URL}`)
  .then(() => console.log("MongoDB connected."))
  .catch((ex) => console.error(ex));

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/tasks", taskRouter);

app.use(express.static("client/build"));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express is listening in port ${PORT}`);
});

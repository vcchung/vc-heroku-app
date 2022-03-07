import express from "express";
import taskController from "../controller/taskController";

const router = express.Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);

export default router;

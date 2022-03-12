import { Button, Td, Tr } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Task from "../model/Task";

interface Props {
  task: Task;
  deleteTaskHandle: (taskId: string) => void;
}

const TaskRow = ({ task, deleteTaskHandle }: Props) => {
  return (
    <Tr>
      <Td>
        <Button onClick={() => deleteTaskHandle(task._id)}>X</Button>
      </Td>
      <Td>{task.summary}</Td>
      <Td>{task.type}</Td>
    </Tr>
  );
};

export default TaskRow;

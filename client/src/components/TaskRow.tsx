import { Button, Td, Tr } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Task } from "./TaskTable";

interface Props {
  task: Task;
  refresh: () => void;
}

const TaskRow = ({ task, refresh }: Props) => {
  const removeTaskHandle = async () => {
    await axios.delete(`/api/tasks/${task._id}`).then(() => {});
    refresh();
  };

  return (
    <Tr>
      <Td>
        <Button onClick={removeTaskHandle}>X</Button>
      </Td>
      <Td>{task.summary}</Td>
      <Td>{task.type}</Td>
    </Tr>
  );
};

export default TaskRow;

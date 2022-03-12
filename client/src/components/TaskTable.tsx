import React from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import TaskRow from "./TaskRow";
import Task from "../model/Task";

interface Props {
  tasks: Task[] | null;
  deleteTaskHandle: (taskId: string) => void;
}

const TaskTable = ({ tasks, deleteTaskHandle }: Props) => {
  return (
    tasks && (
      <Table variant="simple" w={["90%", "90%", "80%", "80%"]}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Summary</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task) => {
            return <TaskRow task={task} deleteTaskHandle={deleteTaskHandle} />;
          })}
        </Tbody>
      </Table>
    )
  );
};

export default TaskTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import TaskRow from "./TaskRow";
import { getTasks } from "../api/TaskApi";

export interface Task {
  _id: string;
  summary: string;
  type: string;
  updatedAt: Date;
}

interface Props {
  updateCount: number;
  refresh: () => void;
}

const TaskTable = ({ updateCount, refresh }: Props) => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);

  useEffect(() => {
    const updateTasks = async () => {
      const response = await getTasks();
      setTasks(response.data);
    };
    updateTasks();
  }, [updateCount]);

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
            return <TaskRow task={task} refresh={refresh} />;
          })}
        </Tbody>
      </Table>
    )
  );
};

export default TaskTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import TaskRow from "./TaskRow";

export interface Task {
  _id: string;
  summary: string;
  updatedAt: Date;
}

interface Props {
  updateCount: number;
  refresh: () => void;
}

const TaskTable = ({ updateCount, refresh }: Props) => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);
  useEffect(() => {
    axios.get<Array<Task>>("/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, [updateCount]);

  return (
    tasks && (
      <Table variant="simple" w={["90%", "90%", "80%", "80%"]}>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Task ID</Th>
            <Th>Summary</Th>
            <Th>Last Update Time</Th>
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

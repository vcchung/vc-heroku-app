import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";

interface Task {
  id: string;
  summary: string;
  updatedAt: Date;
}

const TaskTable = () => {
  const [tasks, setTasks] = useState<Array<Task> | null>(null);
  useEffect(() => {
    axios.get<Array<Task>>("/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    tasks && (
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Task ID</Th>
            <Th>Summary</Th>
            <Th>Last Update Time</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((task) => {
            return renderTask(task);
          })}
        </Tbody>
      </Table>
    )
  );
};

const renderTask = (task: Task) => {
  return (
    <Tr>
      <Td>{task.id}</Td>
      <Td>{task.summary}</Td>
      <Td>{task.updatedAt}</Td>
    </Tr>
  );
};

export default TaskTable;

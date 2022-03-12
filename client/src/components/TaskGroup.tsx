import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskTable from "./TaskTable";

const TaskGroup = () => {
  const [updateCount, setUpdateCount] = useState(0);
  const refresh = () => {
    setUpdateCount((previous) => previous + 1);
  };
  return (
    <>
      <TaskTable updateCount={updateCount} refresh={refresh} />
      <TaskInput refresh={refresh} />
    </>
  );
};

export default TaskGroup;

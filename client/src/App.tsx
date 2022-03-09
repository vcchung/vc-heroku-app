import React, { useState } from "react";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";
import TaskInput from "./components/TaskInput";

function App() {
  const [updateCount, setUpdateCount] = useState(0);
  const refresh = () => {
    setUpdateCount((previous) => previous + 1);
  };
  return (
    <ChakraProvider>
      <div className="App">
        <Heading as="h2" size="3xl" mt={10}>
          VC Todo App
        </Heading>
        <TaskTable updateCount={updateCount} refresh={refresh} />
        <TaskInput refresh={refresh} />
      </div>
    </ChakraProvider>
  );
}

export default App;

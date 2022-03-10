import React, { useState } from "react";
import "./App.css";
import { ChakraProvider, Heading, VStack } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";
import TaskInput from "./components/TaskInput";

function App() {
  const [updateCount, setUpdateCount] = useState(0);
  const refresh = () => {
    setUpdateCount((previous) => previous + 1);
  };
  return (
    <ChakraProvider>
      <VStack className="App">
        <Heading m="2rem">VC Todo App</Heading>
        <TaskTable updateCount={updateCount} refresh={refresh} />
        <TaskInput refresh={refresh} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;

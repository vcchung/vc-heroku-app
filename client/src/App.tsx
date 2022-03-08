import React from "react";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import TaskTable from "./components/TaskTable";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Heading as="h2" size="3xl" mt={10}>
          VC Todo App
        </Heading>
        <TaskTable />
      </div>
    </ChakraProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { ChakraProvider, Heading, VStack } from "@chakra-ui/react";
import TaskGroup from "./components/TaskGroup";

function App() {
  return (
    <ChakraProvider>
      <VStack className="App">
        <Heading m="2rem">VC Todo App</Heading>
        <TaskGroup />
      </VStack>
    </ChakraProvider>
  );
}

export default App;

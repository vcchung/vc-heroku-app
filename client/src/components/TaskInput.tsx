import React, { useState } from "react";
import { Input, Button, HStack } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  refresh: () => void;
}

const TaskInput = ({ refresh }: Props) => {
  const [input, setInput] = useState<string | null>(null);
  return (
    <HStack>
      <Input
        w={["80vw", "80vw", "50vw", "50vw"]}
        placeholder="Enter new task summary ..."
        value={input ?? ""}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        colorScheme="blue"
        isDisabled={!input}
        onClick={() => {
          axios
            .post("/api/tasks", { summary: input })
            .then(() => {
              console.log("successfully created task");
              setInput(null);
              refresh();
            })
            .catch((ex) => console.error("Failed to create task"));
        }}
      >
        Create
      </Button>
    </HStack>
  );
};

export default TaskInput;

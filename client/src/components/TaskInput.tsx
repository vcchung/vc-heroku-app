import React, { useState } from "react";
import { Input, Button, HStack, Select } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  refresh: () => void;
}

const TaskInput = ({ refresh }: Props) => {
  const [input, setInput] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  return (
    <HStack w={["90vw", "90vw", "70vw", "70vw"]}>
      <Input
        placeholder="Enter new task summary ..."
        value={input ?? ""}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Select
        placeholder="Select type"
        isRequired={true}
        value={type ?? ""}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="work">work</option>
        <option value="learning">learning</option>
        <option value="family">family</option>
        <option value="chore">chore</option>
      </Select>
      <Button
        colorScheme="blue"
        isDisabled={!input}
        onClick={() => {
          axios
            .post("/api/tasks", { summary: input, type: type })
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

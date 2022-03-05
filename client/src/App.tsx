import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

interface Data {
  name: string;
}

function App() {
  useEffect(() => {
    axios.get("/api/json").then((response) => setName(response.data.name));
  }, []);
  const [name, setName] = useState("Vincent");
  return (
    <div className="App">
      <h1>I am {name}</h1>
    </div>
  );
}

export default App;

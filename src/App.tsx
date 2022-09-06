import React from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Content />
        <Todos />
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>onChange Event Testing</h1>
      <h2>{name}</h2>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => {
          setName(e.target.value);
        }}></input>
    </div>
  );
}

export default App;

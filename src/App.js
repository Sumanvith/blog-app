import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h2>Test Click Event with Button</h2>
      <button onClick={() => setData("updated data")}>Updated Data</button>
      <h3>{data}</h3>
    </div>
  );
}

export default App;

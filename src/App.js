import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h2>Test OnChange Event with Input Text</h2>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value + "test")}></input>
    </div>
  );
}

export default App;

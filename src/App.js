import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { handleOtherMethod } from "./helper";

function App() {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("hello");
  };

  return (
    <div className="App">
      <h2>Functional Component</h2>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button onClick={handleOtherMethod}>Print</button>
      <h3>{data}</h3>
    </div>
  );
}

export default App;

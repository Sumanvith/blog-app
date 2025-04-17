import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <h2>Heading 2</h2>
      <h5>Heading 5</h5>
    </div>
  );
}

export default App;

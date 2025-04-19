import { useEffect, useState } from "react";
import "./App.css";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  };
  return (
    <div className="App">
      <h1>API Call</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Multiple Item with Role</h1>
      <h1>Custom Role</h1>
      <button>Click 1</button>
      <button>Click 2</button>
      <label htmlFor="input1">Username</label>
      <input type="text" id="input1"></input>
      <label htmlFor="input2">User age</label>
      <input type="text" id="input2"></input>
      <div role="dummy">dummy text</div>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>getByLabelText</h1>
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name"></input>

      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" defaultChecked={true}></input>
    </div>
  );
}

export default App;

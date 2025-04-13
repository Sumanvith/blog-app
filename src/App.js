import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>getAllByLabelText</h1>
      <label htmlFor="user-name1">Username</label>
      <input type="text" id="user-name1" defaultValue={"hello"}></input>

      <label htmlFor="user-name2">Username</label>
      <input type="text" id="user-name2" defaultValue={"hello"}></input>

      <label htmlFor="user-name3">Username</label>
      <input type="text" id="user-name3" defaultValue={"hello"}></input>

      <label htmlFor="skill1">Skills</label>
      <input type="checkbox" id="skill1" defaultChecked={true}></input>

      <label htmlFor="skill2">Skills</label>
      <input type="checkbox" id="skill2" defaultChecked={true}></input>

      <label htmlFor="skill3">Skills</label>
      <input type="checkbox" id="skill3" defaultChecked={true}></input>
    </div>
  );
}

export default App;

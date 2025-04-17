import "./App.css";

function App(props) {
  return (
    <div className="App">
      <h1>Functional Props Testing and Mocking</h1>
      <button onClick={props.testFunction}>Click</button>
    </div>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Overriding data-testid</h1>
      <div data-testid="test-id">Dummy Text (Predefined)</div>
      <div element-id="test-id">Dummy Text (Userdefined)</div>
    </div>
  );
}

export default App;

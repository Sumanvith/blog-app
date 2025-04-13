import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>getByTestId and getAllByTestId</h1>
      <div data-testid="div-test-id">Testing with Test id 1</div>
      <div data-testid="div-test-id">Testing with Test id 2</div>
    </div>
  );
}

export default App;

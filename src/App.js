import "./App.css";

function App() {
  let login = false;
  return (
    <div className="App">
      <h1>queryBy</h1>
      {login ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

export default App;

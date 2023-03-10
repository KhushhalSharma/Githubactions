import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
}

export default App;

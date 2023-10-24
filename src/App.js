import { useState } from "react";
import "./App.css";
import Example from "./Example";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <h1>Hello</h1>
      <h1>Spain</h1>
      <button onClick={() => setShow(!show)}>Click me</button>

      {
        show === true ? <Example /> : null
      }
    </div>
  );
}

export default App;

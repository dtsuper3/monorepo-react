import { Button } from "@code/components";
import { useState } from "react";
import './App.css';

function App() {
  const [state, setState] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <div>This is cout {state}</div>
        <Button onClick={() => setState(s => s + 1)}></Button>
      </header>
    </div>
  );
}

export default App;

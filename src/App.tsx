import { useState } from "react";
import TldrawComponent from "./TldrawComponent";

function App() {
  const [numItems, setNumItems] = useState<number>(0);

  const handleGenerate = () => {
    const inputElement = document.getElementById('numItems') as HTMLInputElement;
    const value = Number(inputElement?.value) || 0;
    setNumItems(value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dynamic Timeline Generator</h1>
      <div style={{ marginBottom: "20px", display: 'flex', alignItems: 'center' }}>
        <label htmlFor="numItems">Number of timeline items:</label>
        <input
          type="number"
          id="numItems"
          defaultValue={numItems}
          style={{ marginLeft: "10px", width: "50px" }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerate();
          }}
          style={{ marginLeft: "10px" }}
        >
          <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer' }}>
            Generate
          </button>
        </form>
      </div>
      <TldrawComponent numItems={numItems} />
    </div>
  );
}

export default App;

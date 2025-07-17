import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <h1>Vite + React</h1>
      <div>
        <button
          className="bg-blue-500 px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
